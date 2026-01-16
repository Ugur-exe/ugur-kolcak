import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            // Navbar
            nav: {
                home: "Home",
                caseStudies: "Case Studies",
                getInTouch: "Get In Touch"
            },
            // Personnel/Home
            home: {
                greeting: "Hi, I'm Uğur Kolçak",
                role: "I'm Computer Engineer",
                description: "Hi, I'm Uğur Kolçak, a mobile developer with a focus on {{flutter}} and {{spring}}. I'm passionate about technology and dedicated to continuously improving my skills to build high-quality, user-friendly applications.",
                flutter: "Flutter",
                spring: "Java Spring Boot",
                cta: "Let's get started",
                workedWith: "Worked with"
            },
            // Case Studies
            caseStudies: {
                title: "Case Studies",
                description: "In the \"Case Studies\" section, I share my projects and success stories. Each study covers the processes from design to implementation and includes the outcomes I've achieved. This way, you can gain insight into my projects.",
                pharmacy: {
                    title: "Eczane Kapında",
                    description: "The \"Eczane Kapında\" application is an innovative mobile app that allows users to order medications from the nearest pharmacies and have those orders delivered to their doorsteps."
                },
                shorts: {
                    title: "Shorts Clone",
                    description: "The \"Shorts Clone\" application is a dynamic mobile app that replicates the popular YouTube Shorts feature. It enables users to create, upload, and watch short videos effortlessly, fostering a fun and engaging community for quick content consumption."
                }
            },
            // Contact
            contact: {
                title: "Get In Touch",
                description: "Don't hesitate to get in touch! I'd love to discuss new projects, collaborations, or career opportunities. Whether you want to share an idea or work together on a project, you can reach out using the form below.",
                form: {
                    email: "Email",
                    emailPlaceholder: "Please enter your email",
                    mobile: "Mobile",
                    mobilePlaceholder: "Please enter mobile",
                    message: "Message",
                    messagePlaceholder: "Enter your message",
                    submit: "Submit >",
                    success: "Success! Your message was sent.",
                    error: "Failed to send the message. Please try again."
                },
                direct: {
                    title: "Or reach me directly:",
                    email: "Email:",
                    phone: "Phone:"
                }
            },
            // Footer
            footer: {
                rights: "All rights reserved.",
                builtWith: "Built with React & Tailwind CSS"
            },
            // Validation
            validation: {
                emailInvalid: "Enter valid email address",
                emailRequired: "Email address is required",
                phoneRequired: "Mobile required field",
                phoneInteger: "Enter integer",
                messageRequired: "Messages required field"
            }
        }
    },
    tr: {
        translation: {
            // Navbar
            nav: {
                home: "Ana Sayfa",
                caseStudies: "Projeler",
                getInTouch: "İletişim"
            },
            // Personnel/Home
            home: {
                greeting: "Merhaba, Ben Uğur Kolçak",
                role: "Bilgisayar Mühendisiyim",
                description: "Merhaba, ben Uğur Kolçak, {{flutter}} ve {{spring}} odaklı bir mobil geliştiriciyim. Teknolojiye tutkulu ve yüksek kaliteli, kullanıcı dostu uygulamalar oluşturmak için becerilerimi sürekli geliştirmeye adanmış biriyim.",
                flutter: "Flutter",
                spring: "Java Spring Boot",
                cta: "Hadi Başlayalım",
                workedWith: "Çalıştığım Teknolojiler"
            },
            // Case Studies
            caseStudies: {
                title: "Projeler",
                description: "\"Projeler\" bölümünde projelerimi ve başarı hikayelerimi paylaşıyorum. Her çalışma, tasarımdan uygulamaya kadar olan süreçleri ve elde ettiğim sonuçları içerir. Bu sayede projelerim hakkında fikir edinebilirsiniz.",
                pharmacy: {
                    title: "Eczane Kapında",
                    description: "\"Eczane Kapında\" uygulaması, kullanıcıların en yakın eczanelerden ilaç siparişi vermelerini ve bu siparişlerin kapılarına teslim edilmesini sağlayan yenilikçi bir mobil uygulamadır."
                },
                shorts: {
                    title: "Shorts Clone",
                    description: "\"Shorts Clone\" uygulaması, popüler YouTube Shorts özelliğini taklit eden dinamik bir mobil uygulamadır. Kullanıcıların kısa videolar oluşturmasına, yüklemesine ve izlemesine olanak tanır, hızlı içerik tüketimi için eğlenceli ve ilgi çekici bir topluluk oluşturur."
                }
            },
            // Contact
            contact: {
                title: "İletişime Geçin",
                description: "İletişime geçmekten çekinmeyin! Yeni projeler, işbirlikleri veya kariyer fırsatları hakkında konuşmayı çok isterim. Bir fikir paylaşmak veya bir proje üzerinde birlikte çalışmak isterseniz, aşağıdaki formu kullanarak ulaşabilirsiniz.",
                form: {
                    email: "E-posta",
                    emailPlaceholder: "Lütfen e-posta adresinizi girin",
                    mobile: "Telefon",
                    mobilePlaceholder: "Lütfen telefon numaranızı girin",
                    message: "Mesaj",
                    messagePlaceholder: "Mesajınızı girin",
                    submit: "Gönder >",
                    success: "Başarılı! Mesajınız gönderildi.",
                    error: "Mesaj gönderilemedi. Lütfen tekrar deneyin."
                },
                direct: {
                    title: "Veya doğrudan ulaşın:",
                    email: "E-posta:",
                    phone: "Telefon:"
                }
            },
            // Footer
            footer: {
                rights: "Tüm hakları saklıdır.",
                builtWith: "React & Tailwind CSS ile geliştirildi"
            },
            // Validation
            validation: {
                emailInvalid: "Geçerli bir e-posta adresi girin",
                emailRequired: "E-posta adresi gereklidir",
                phoneRequired: "Telefon numarası gereklidir",
                phoneInteger: "Tam sayı girin",
                messageRequired: "Mesaj gereklidir"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        detection: {
            order: ['navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage']
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
