import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import Button from './Button';
import { analyzeImageContent } from '../services/geminiService';
import { Activity, ArrowLeft, AlertTriangle, CheckCircle2, AlertCircle, Stethoscope, Search } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../utils/translations';
import { Type } from '@google/genai';

interface AnalyzerViewProps {
  onBack: () => void;
  lang: Language;
}

interface Condition {
  name: string;
  reasoning: string;
  recommendation: string;
  severity: 'Low' | 'Medium' | 'High';
}

interface AnalysisResult {
  visualFindings: string;
  conditions: Condition[];
  generalAdvice: string;
}

const AnalyzerView: React.FC<AnalyzerViewProps> = ({ onBack, lang }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  
  const t = translations[lang].analyzer;
  const commonT = translations[lang].common;

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setResult(null);
    
    try {
      const systemInstruction = `You are a specialized Dermatologist AI. Analyze the nail image.
      Provide the output in strict JSON format.
      Identify potential conditions based on visual evidence.
      For each condition, provide the name, specific reasoning based on the image, a recommendation, and an estimated severity level (Low, Medium, High).
      
      Language: ${lang === 'th' ? 'Thai' : 'English'}`;

      const fullPrompt = prompt 
        ? `${systemInstruction}\nUser Note: ${prompt}` 
        : systemInstruction;

      const schema = {
        type: Type.OBJECT,
        properties: {
          visualFindings: { type: Type.STRING, description: "Overview of what is seen in the image (color, shape, texture)" },
          conditions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING, description: "Name of the disease or condition" },
                reasoning: { type: Type.STRING, description: "Why this condition is suspected based on visual signs" },
                recommendation: { type: Type.STRING, description: "Specific advice for this condition" },
                severity: { type: Type.STRING, description: "Severity level: Low, Medium, or High" }
              },
              required: ["name", "reasoning", "recommendation", "severity"]
            }
          },
          generalAdvice: { type: Type.STRING, description: "Overall summary and advice" }
        },
        required: ["visualFindings", "conditions", "generalAdvice"]
      };

      const jsonString = await analyzeImageContent(selectedFile, fullPrompt, schema);
      const parsedData = JSON.parse(jsonString) as AnalysisResult;
      setResult(parsedData);

    } catch (error) {
      console.error(error);
      alert(t.error);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors animate-fade-in"
      >
        <ArrowLeft size={20} className="mr-2" /> {commonT.back}
      </button>

      <div className="mb-10 animate-slide-up">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h2>
        <p className="text-gray-500">{t.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 animate-slide-up delay-100">
        {/* Left Column: Upload & Input */}
        <div className="lg:col-span-5 space-y-6">
          <ImageUploader 
            selectedImage={selectedFile} 
            onImageSelected={setSelectedFile}
            texts={{ uploadTip: commonT.uploadTip, uploadSub: commonT.uploadSub }}
          />
          
          {selectedFile && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.promptLabel}</label>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={t.promptPlaceholder}
                  className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                />
              </div>
              
              <Button 
                onClick={handleAnalyze} 
                isLoading={loading} 
                loadingText={commonT.processing}
                className="w-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 !bg-blue-600"
              >
                <Activity size={20} /> {t.button}
              </Button>
            </div>
          )}

          {/* Medical Disclaimer Box (Always Visible) */}
          <div className="bg-amber-50 border border-amber-100 p-5 rounded-2xl flex gap-4 shadow-sm">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={24} />
            <div>
              <h4 className="font-semibold text-amber-900 mb-1">Medical Disclaimer</h4>
              <p className="text-amber-800 text-sm leading-relaxed opacity-90">
                {t.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Results */}
        <div className="lg:col-span-7">
          <div className={`bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden min-h-[500px] flex flex-col ${loading ? 'animate-pulse' : ''}`}>
            
            {!result && !loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-12">
                <Activity size={64} className="mb-6 opacity-10" />
                <p className="text-center text-gray-500 font-light">{t.empty}</p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center p-12">
                <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mb-6"></div>
                <p className="text-gray-600 font-medium animate-pulse">{t.loading}</p>
              </div>
            )}

            {result && !loading && (
              <div className="flex flex-col h-full animate-fade-in">
                {/* Header: Visual Findings */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 text-white p-2 rounded-lg">
                      <Search size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {lang === 'th' ? 'สิ่งที่ตรวจพบเบื้องต้น' : 'Visual Findings'}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {result.visualFindings}
                  </p>
                </div>

                {/* Body: Conditions Cards */}
                <div className="p-8 bg-white flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Stethoscope size={20} className="text-blue-600" />
                    {lang === 'th' ? 'โรคหรือภาวะที่อาจเป็นไปได้' : 'Potential Conditions'}
                  </h3>

                  <div className="grid gap-6">
                    {result.conditions.map((condition, index) => (
                      <div 
                        key={index} 
                        className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow duration-300 bg-white"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                          <h4 className="font-bold text-lg text-gray-900">{condition.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide w-fit ${getSeverityColor(condition.severity)}`}>
                            {condition.severity} Risk
                          </span>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex gap-3 items-start">
                            <AlertCircle size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                            <div>
                              <span className="text-xs font-semibold text-gray-500 uppercase block mb-0.5">
                                {lang === 'th' ? 'เหตุผลประกอบ' : 'Reasoning'}
                              </span>
                              <p className="text-sm text-gray-700">{condition.reasoning}</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-3 items-start bg-gray-50 p-3 rounded-lg">
                            <CheckCircle2 size={16} className="text-green-600 mt-1 flex-shrink-0" />
                            <div>
                              <span className="text-xs font-semibold text-gray-500 uppercase block mb-0.5">
                                {lang === 'th' ? 'คำแนะนำ' : 'Recommendation'}
                              </span>
                              <p className="text-sm text-gray-700">{condition.recommendation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: General Advice */}
                <div className="bg-blue-50 p-6 border-t border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm uppercase tracking-wide">
                     {lang === 'th' ? 'สรุปคำแนะนำรวม' : 'General Advice'}
                  </h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    {result.generalAdvice}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzerView;