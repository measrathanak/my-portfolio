import { createI18n } from 'vue-i18n'
<<<<<<< HEAD
import Home from './components/layout/Home.vue'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'khm',
  messages: {
    en: {
      Hi: 'Hi',
      RATHANAK: 'RATHANAK',
      I_M: "I'm",
      Service: 'Service',
      Skills: 'Skills',
      WhyMe: 'Why Me',
      register: 'Register',
      user: 'User',
      services: 'Services',
      Projects: 'Projects',
      setting: 'Setting',
      files: 'Files',
      productTitle: 'Welcome to our project',
      Contact: 'Contact',
      Home: 'Home',
      intro:
        'Welcome, dear beloved friends. I am a civil servant working at the Cambodia-China Friendship Preah Kossamak Hospital. The Project Portfolio writing above represents research and compilation work on the Vue JS subject. This work was accomplished through the guidance and support of instructors and fellow participants, as well as through my own active dedication and effort. Furthermore, I believe this work still has limitations, as my knowledge and experience remain limited. Therefore, errors and mistakes of various kinds will inevitably occur. I await criticism for improvement.' +
        'This appears to be an acknowledgment or preface section from an academic or professional project, where the author humbly introduces themselves, explains the context of their work, and acknowledges potential limitations while remaining open to feedback.',
    },
    khm: {
      Hi: 'សួស្តី',
      RATHANAK: 'រតនៈ',
      I_M: 'ខ្ញុំឈ្មោះ',
      Skills: 'ជំនាញ',
      WhyMe: 'ហេតុអ្វី',
      about: 'អំពីយើង',
      register: 'ចុះឈ្មោះ',
      user: 'អ្នកប្រើប្រាស់',
      Service: 'សេវាកម្ម',
      Projects: 'គម្រោង',
      setting: 'ការកំណត់',
      files: 'ឯកសារ',
      productTitle: 'សូមស្វាគមន៍មកកាន់គម្រោងរបស់យើង',
      Contact: 'ទំនាក់ទំនង',
      Home: 'ទំព័រដើម',
      intro:
        'សូមស្វាគមន៍ប្រិយមិត្តជាទីស្រឡាញ់ទាំងអស់គ្នា ខ្ញុំបាទជាមន្ត្រីរាជការ បម្រើការងារនៅមន្ទីរពេទ្យមិត្តភាពកម្ពុជា-ចិន ព្រះកុសុមៈ។ ការសរសេរ Project Portfolio' +
        'ខាងលើនេះ គឺជាការសិក្សាស្រាវជ្រាវចងក្រង លើមុខវិជ្ជា Vue JS ដែលស្នាដៃនេះទៀតសោធ' +
        'អាចសម្រេចទៅបានក៏ដោយសារការជួយជ្រោមជ្រែង ពីលោកគ្រូណែនាំ និងសិក្ខាកាមចូលរួមជាមួយគ្នា' +
        'ព្រមទាំងដោយសារការខិតខំប្រឹងប្រែងយ៉ាងសកម្មរបស់ខ្ញុំបាទផងដែរ។ ម្យ៉ាងវិញទៀត' +
        'ខ្ញុំបាទគិតថាស្នាដៃនេះពិតជានៅមានកម្រិតនៅឡើយ ព្រោះការចេះដឹងរបស់ខ្ញុំបាទ' +
        'ព្រមទាំងបទពិសោធន៍នៅក្មេងខ្ចីនៅឡើយ' +
        'ដូច្នេះហើយកំហុសឆ្គងដោយប្រការផ្សេងៗប្រាកដជាកើតមានឡើងជាមិនខាន' +
        'ខ្ញុំបាទរង់ចាំទទួលនូវការរិះគន់ដើម្បីស្ថាបនា។',
    },
  },
})

export default i18n
=======

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            Hi:'Hi',
            Panharith: 'Panharith',
            I_M:"I'm",
            Service: 'Service',
            Skills: 'Skills',
            WhyMe:'Why Me',
            register: 'Register',
            user: 'User',
            services: 'Services',
            Projects: 'Projects',
            setting: 'Setting',
            files: 'Files',
            productTitle: 'Welcome to our project',
            Contact:'Contact'
        },
        khm: {
            Hi:'សួស្តី',
            Panharith: 'បញ្ញារិទ្ធិ',
            I_M:'ខ្ញុំឈ្មោះ',
            Skills: 'ជំនាញ',
            WhyMe:'ហេតុអ្វី',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            user: 'អ្នកប្រើប្រាស់',
            Service: 'សេវាកម្ម',
            Projects: 'គម្រោង',
            setting: 'ការកំណត់',
            files: 'ឯកសារ',
            productTitle: 'សូមស្វាគមន៍មកកាន់គម្រោងរបស់យើង',
            Contact:'ទំនាក់ទំនង'
        }
    }
}
)

export default i18n;
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
