import { Language } from '../types';

export const translations = {
  th: {
    common: {
      home: 'หน้าแรก',
      back: 'ย้อนกลับ',
      footer: '© 2026 NailCare AI. Made by Satit KKU',
      processing: 'กำลังวิเคราะห์...',
      uploadTip: 'คลิกเพื่ออัปโหลดรูปภาพ',
      uploadSub: 'หรือลากไฟล์มาวางที่นี่ (JPG, PNG)',
    },
    landing: {
      title: 'ดูแลสุขภาพเล็บด้วย ',
      titleHighlight: 'AI อัจฉริยะ',
      subtitle: 'วิเคราะห์ความผิดปกติของเล็บเบื้องต้น\nพร้อมคำแนะนำที่เข้าใจง่ายและรวดเร็ว',
      start: 'เริ่มต้นใช้งาน',
      moreInfo: 'เรียนรู้เกี่ยวกับสุขภาพเล็บเพิ่มเติม',
      analyzerTitle: 'วิเคราะห์สุขภาพเล็บ',
      analyzerDesc: 'อัปโหลดรูปภาพเล็บของคุณเพื่อให้ AI ช่วยประเมินความเสี่ยงและแนะนำแนวทางการดูแลเบื้องต้น',
      infoTitle: 'สุขภาพเล็บสะท้อนสุขภาพตัว',
      infoDesc: 'เล็บเป็นอวัยวะส่วนหนึ่งของร่างกายที่หลายคนอาจมองข้ามและให้ความสำคัญน้อยกว่าส่วนอื่น ๆ ทั้งที่ในความเป็นจริงเล็บมีหน้าที่สำคัญในการป้องกันปลายนิ้ว ช่วยในการหยิบจับสิ่งของ และเสริมประสิทธิภาพในการรับรู้ความรู้สึก นอกจากนี้ ตามหลักการแพทย์ เล็บยังสามารถสะท้อนถึงภาวะสุขภาพและความผิดปกติของอวัยวะภายในร่างกายได้อีกด้วย ลักษณะของเล็บ เช่น สี รูปร่าง ความหนา ความเรียบ หรือความแข็งแรง อาจเปลี่ยนแปลงไปเมื่อร่างกายเกิดความผิดปกติหรือมีโรคบางชนิดแฝงอยู่ เช่น เล็บซีดอาจเกี่ยวข้องกับภาวะโลหิตจาง เล็บเปราะแตกง่ายอาจบ่งบอกถึงการขาดสารอาหาร หรือเล็บมีสีผิดปกติอาจเกิดจากการติดเชื้อหรือโรคบางอย่าง การสังเกตเล็บอย่างสม่ำเสมอจึงเป็นอีกวิธีหนึ่งที่ช่วยให้สามารถรับรู้ความผิดปกติของร่างกายได้ตั้งแต่ระยะเริ่มต้นอย่างไรก็ตาม ในชีวิตประจำวันหลายคนอาจละเลยการตรวจดูเล็บของตนเอง ทำให้สัญญาณเตือนทางสุขภาพที่แสดงออกผ่านเล็บถูกมองข้ามไป ด้วยเหตุนี้ คณะผู้จัดทำโครงงานจึงมีความสนใจศึกษาความสำคัญของการสังเกตลักษณะของเล็บและความสัมพันธ์ระหว่างความผิดปกติของเล็บกับภาวะสุขภาพต่าง ๆ เพื่อสร้างความตระหนักรู้และส่งเสริมให้ทุกคนหันมาใส่ใจสุขภาพเล็บมากยิ่งขึ้น อันจะนำไปสู่การดูแลสุขภาพตนเองอย่างเหมาะสมและการป้องกันโรคได้อย่างมีประสิทธิภาพ',
      infoImage: 'https://images.unsplash.com/photo-1632497607730-a9cb719d4586?q=80&w=800&auto=format&fit=crop',
      infoTitle2: 'รู้ทันก่อนสาย',
      infoDesc2: 'การตรวจพบความผิดปกติแต่เนิ่นๆ ช่วยให้การรักษาทำได้ง่ายและมีประสิทธิภาพมากขึ้น',
      infoImage2: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800&auto=format&fit=crop',
    },
    analyzer: {
      title: 'วิเคราะห์เล็บ',
      subtitle: 'อัปโหลดรูปภาพเล็บที่ชัดเจนและระบุอาการที่คุณกังวล (ถ้ามี)',
      uploadLabel: 'อัปโหลดรูปภาพ',
      promptLabel: 'อาการที่กังวล (ระบุหรือไม่ก็ได้)',
      promptPlaceholder: 'เช่น มีเส้นสีดำ, เล็บเปราะง่าย...',
      button: 'วิเคราะห์ผล',
      resultTitle: 'ผลการวิเคราะห์',
      loading: 'AI กำลังประมวลผลข้อมูล...',
      empty: 'ยังไม่มีผลการวิเคราะห์',
      error: 'เกิดข้อผิดพลาดในการวิเคราะห์ โปรดลองใหม่อีกครั้ง',
      defaultPrompt: 'วิเคราะห์สุขภาพเล็บจากภาพนี้ บอกความผิดปกติที่พบ และโรคที่อาจเป็นไปได้',
      disclaimer: 'ผลลัพธ์จาก AI เป็นเพียงการวิเคราะห์เบื้องต้น ไม่สามารถใช้แทนคำวินิจฉัยทางการแพทย์ได้ รูปถ่ายอาจไม่ชัดเจนจึงทำให้ผลคลาดเคลื่อนได้ โปรดตรวจสอบลักษณะโรคอีกที และปรึกษาแพทย์เฉพาะทางเพื่อการรักษาที่ถูกต้อง'
    },
    infoPage: {
      title: 'ความรู้คู่สุขภาพเล็บ',
      subtitle: 'เข้าใจสัญญาณที่เล็บพยายามบอกคุณ',
      healthy: {
        title: 'เล็บสุขภาพดีเป็นอย่างไร?',
        desc: 'เล็บสุขภาพดีควรมีสีชมพูจางๆ พื้นผิวเรียบ แข็งแรง ไม่เปราะหรือหักง่าย โคนเล็บมีสีขาวครึ่งวงกลม (Lunula) ชัดเจน'
      },
      signs: {
        title: 'สัญญาณเตือนโรค',
        items: [
          { 
            name: 'เล็บซีดหรือขาว', 
            desc: 'อาจบ่งบอกถึงภาวะโลหิตจาง โรคตับ หรือโรคขาดสารอาหาร',
            image: 'https://images.unsplash.com/photo-1598448742525-50e8f0a7837f?q=80&w=500&auto=format&fit=crop'
          },
          { 
            name: 'เล็บเหลือง', 
            desc: 'มักเกิดจากการติดเชื้อรา โรคปอด หรือโรคเบาหวาน',
            image: 'https://images.unsplash.com/photo-1611021061285-19a532638324?q=80&w=500&auto=format&fit=crop'
          },
          { 
            name: 'เล็บมีเส้นสีดำ', 
            desc: 'ควรระวังมะเร็งผิวหนัง (Melanoma) หากเส้นสีดำขยายกว้างขึ้น',
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=500&auto=format&fit=crop'
          },
          { 
            name: 'เล็บเป็นหลุม', 
            desc: 'อาจสัมพันธ์กับโรคสะเก็ดเงิน หรือโรคผมร่วงเป็นหย่อม',
            image: 'https://images.unsplash.com/photo-1513415564515-763d91423bdd?q=80&w=500&auto=format&fit=crop'
          }
        ]
      },
      diseases: {
        title: 'โรคเล็บที่พบบ่อย',
        items: [
          { 
            name: 'เชื้อราที่เล็บ (Onychomycosis)', 
            desc: 'เล็บหนาตัวขึ้น เปลี่ยนสีเป็นเหลืองหรือขาวขุ่น และเปราะหักง่าย มักเริ่มจากปลายเล็บ',
            image: 'https://cdn.discordapp.com/attachments/1463162256110911532/1463885034585981094/IMG_0018.webp?ex=697374ad&is=6972232d&hm=b232efe8dff14ffaac434c31db29d36c88fb9d8d59157d9f8581fcd6776f9870&'
          },
          { 
            name: 'จมูกเล็บอักเสบ (Paronychia)', 
            desc: 'ผิวหนังรอบเล็บแดง บวม เจ็บ และอาจมีหนอง เกิดจากการติดเชื้อแบคทีเรียหรือเชื้อรา',
            image: 'https://cdn.discordapp.com/attachments/1463162256110911532/1463885211140882534/IMG_0020.jpg?ex=697374d8&is=69722358&hm=7003ba2e27613a25e0ebdd89d0e6a5e5f192ad81b391df8ea8e1b1a13fcb1eef&'
          },
          { 
            name: 'สะเก็ดเงินที่เล็บ (Nail Psoriasis)', 
            desc: 'ผิวเล็บเป็นหลุมเล็กๆ คล้ายรอยเข็ม (Pitting) เล็บร่อนออกจากฐาน หรือเล็บหนาตัวผิดปกติ',
            image: 'https://cdn.discordapp.com/attachments/1463162256110911532/1463883874278047961/IMG_0015.png?ex=69737399&is=69722219&hm=db29f19ac63dd37c5b3eecbc51572a97ddfa32111950b7d58609397ec052942f&'
          },
          { 
            name: 'เล็บขบ (Ingrown Nail)', 
            desc: 'ขอบเล็บงอกแทงเข้าไปในเนื้อเยื่อข้างเล็บ ทำให้ปวด บวม แดง และอาจติดเชื้อได้ง่าย',
            image: 'https://cdn.discordapp.com/attachments/1463162256110911532/1463884468187168933/IMG_0016.jpg?ex=69737426&is=697222a6&hm=7384f70812117820f987c0ed44c20e0e8d25b7603d81034af48903b221ef8e19&'
          }
        ]
      },
      tips: {
        title: 'การดูแลรักษา',
        list: [
          'รักษาความสะอาดและตัดเล็บให้สั้นพอประมาณ',
          'หลีกเลี่ยงการกัดเล็บหรือตัดหนังรอบเล็บ',
          'ทาครีมบำรุงมือและเล็บเป็นประจำ',
          'สวมถุงมือเมื่อต้องสัมผัสสารเคมีหรือน้ำเป็นเวลานาน'
        ]
      }
    }
  },
  en: {
    common: {
      home: 'Home',
      back: 'Back',
      footer: '© 2024 NailCare AI. Powered by Gemini Pro Vision',
      processing: 'Analyzing...',
      uploadTip: 'Click to upload image',
      uploadSub: 'or drag and drop here (JPG, PNG)',
    },
    landing: {
      title: 'Nail Health Check with ',
      titleHighlight: 'Smart AI',
      subtitle: 'Preliminary nail analysis\nwith quick and easy-to-understand advice.',
      start: 'Get Started',
      moreInfo: 'Learn More About Nail Health',
      analyzerTitle: 'Analyze Nail Health',
      analyzerDesc: 'Upload a photo of your nail to let AI assess risks and provide basic care guidelines.',
      infoTitle: 'Nails Reflect Your Health',
      infoDesc: 'Nails can indicate internal health issues. Observing changes helps you stay ahead of diseases.',
      infoImage: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=800&auto=format&fit=crop',
      infoTitle2: 'Early Detection Matters',
      infoDesc2: 'Detecting abnormalities early makes treatment easier and more effective.',
      infoImage2: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800&auto=format&fit=crop',
    },
    analyzer: {
      title: 'Nail Analysis',
      subtitle: 'Upload a clear photo of your nail and specify concerns (optional)',
      uploadLabel: 'Upload Image',
      promptLabel: 'Concerns (Optional)',
      promptPlaceholder: 'e.g., dark lines, brittle nails...',
      button: 'Analyze',
      resultTitle: 'Analysis Result',
      loading: 'AI is processing...',
      empty: 'No analysis result yet',
      error: 'An error occurred. Please try again.',
      defaultPrompt: 'Analyze nail health from this image. Identify abnormalities and potential conditions.',
      disclaimer: 'AI results are preliminary and do not replace medical diagnosis. The photo may be unclear causing inaccurate results, please double-check disease characteristics. Consult a specialist for proper treatment.'
    },
    infoPage: {
      title: 'Nail Health Knowledge',
      subtitle: 'Understanding what your nails are telling you',
      healthy: {
        title: 'What do healthy nails look like?',
        desc: 'Healthy nails should be pinkish, smooth, strong, not brittle. The lunula (half-moon at the base) should be visible.'
      },
      signs: {
        title: 'Warning Signs',
        items: [
          { 
            name: 'Pale or White Nails', 
            desc: 'May indicate anemia, liver disease, or malnutrition.',
            image: 'https://images.unsplash.com/photo-1598448742525-50e8f0a7837f?q=80&w=500&auto=format&fit=crop'
          },
          { 
            name: 'Yellow Nails', 
            desc: 'Often caused by fungal infections, lung disease, or diabetes.',
            image: 'https://images.unsplash.com/photo-1611021061285-19a532638324?q=80&w=500&auto=format&fit=crop'
          },
          { 
            name: 'Dark Lines', 
            desc: 'Watch out for Melanoma (skin cancer) if the dark line expands.',
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=500&auto=format&fit=crop'
          },
          { 
            name: 'Pitted Nails', 
            desc: 'May be associated with psoriasis or alopecia areata.',
            image: 'https://images.unsplash.com/photo-1513415564515-763d91423bdd?q=80&w=500&auto=format&fit=crop'
          }
        ]
      },
      diseases: {
        title: 'Common Nail Diseases',
        items: [
          { 
            name: 'Nail Fungus (Onychomycosis)', 
            desc: 'Nails become thickened, discolored (yellow/white), and brittle. Often starts at the nail tip.',
            image: 'https://cdn.discordapp.com/attachments/1463162256110911532/1463885034585981094/IMG_0018.webp?ex=697374ad&is=6972232d&hm=b232efe8dff14ffaac434c31db29d36c88fb9d8d59157d9f8581fcd6776f9870&'
          },
          { 
            name: 'Paronychia', 
            desc: 'Redness, swelling, and pain around the nail base. Caused by bacterial or fungal infection.',
            image: 'https://cdn.discordapp.com/attachments/1463162256110911532/1463885211140882534/IMG_0020.jpg?ex=697374d8&is=69722358&hm=7003ba2e27613a25e0ebdd89d0e6a5e5f192ad81b391df8ea8e1b1a13fcb1eef&'
          },
          { 
            name: 'Nail Psoriasis', 
            desc: 'Pitting on the nail surface, separation from the nail bed (onycholysis), or abnormal thickening.',
            image: 'https://cdn.discordapp.com/attachments/1463162256110911532/1463883874278047961/IMG_0015.png?ex=69737399&is=69722219&hm=db29f19ac63dd37c5b3eecbc51572a97ddfa32111950b7d58609397ec052942f&'
          },
          { 
            name: 'Ingrown Nail', 
            desc: 'The side of the nail grows into the soft flesh, causing pain, redness, swelling, and infection.',
            image: 'https://cdn.discordapp.com/attachments/1463162256110911532/1463884468187168933/IMG_0016.jpg?ex=69737426&is=697222a6&hm=7384f70812117820f987c0ed44c20e0e8d25b7603d81034af48903b221ef8e19&'
          }
        ]
      },
      tips: {
        title: 'Care Tips',
        list: [
          'Keep nails clean and trimmed.',
          'Avoid biting nails or cutting cuticles.',
          'Moisturize hands and nails regularly.',
          'Wear gloves when handling chemicals or water for long periods.'
        ]
      }
    }
  }
};