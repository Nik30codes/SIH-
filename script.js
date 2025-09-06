 document.addEventListener('DOMContentLoaded', () => {

            // --- TRANSLATION DATA ---
            const translations = {
                hi: {
                    nav_features: "विशेषताएँ",
                    nav_how_it_works: "यह कैसे काम करता है",
                    nav_contact: "संपर्क",
                    hero_title: "बेहतर भविष्य के लिए स्मार्ट खेती",
                    hero_subtitle: "फसलों, मिट्टी, मौसम और कीटों पर वास्तविक समय में, एआई-संचालित सलाह सीधे अपने फोन पर प्राप्त करें। कृषि मित्र के साथ अपनी उपज और आय बढ़ाएँ।",
                    hero_cta: "अभी शुरू करें",
                    features_title: "सब कुछ एक ही स्थान पर",
                    feature1_title: "फसल सलाह",
                    feature1_desc: "आपकी मिट्टी के प्रकार, मौसम और खेत के स्थान के आधार पर व्यक्तिगत फसल सिफारिशें।",
                    feature2_title: "मृदा स्वास्थ्य गाइड",
                    feature2_desc: "अपनी मिट्टी के स्वास्थ्य को बेहतर बनाने के लिए उर्वरकों और पोषक तत्वों पर तुरंत सिफारिशें प्राप्त करें।",
                    feature3_title: "मौसम अलर्ट",
                    feature3_desc: "अपनी फसलों को चरम स्थितियों से बचाने के लिए समय पर मौसम पूर्वानुमान और अलर्ट प्राप्त करें।",
                    feature4_title: "कीट और रोग का पता लगाना",
                    feature4_desc: "बस अपनी फसल की एक तस्वीर अपलोड करें, और हमारा एआई कीटों या बीमारियों की पहचान करेगा और उपचार का सुझाव देगा।",
                    feature5_title: "बाजार मूल्य",
                    feature5_desc: "सर्वोत्तम लाभ के लिए सही समय पर बेचने के लिए अपनी फसलों के लाइव बाजार मूल्यों को ट्रैक करें।",
                    feature6_title: "विशेषज्ञ सहायता",
                    feature6_desc: "मार्गदर्शन के लिए कृषि विशेषज्ञों से जुड़ें और अपनी खेती से संबंधित प्रश्नों का समाधान करें।",
                    how_it_works_title: "सफलता के सरल कदम",
                    step1_title: "अपना फार्म पंजीकृत करें",
                    step1_desc: "अपने मोबाइल नंबर का उपयोग करके एक खाता बनाएं और अपने खेत के बारे में बुनियादी विवरण जोड़ें।",
                    step2_title: "जानकारी अपलोड करें",
                    step2_desc: "विश्लेषण के लिए मिट्टी की रिपोर्ट साझा करें या अपनी फसलों की तस्वीरें अपलोड करें।",
                    step3_title: "तुरंत सलाह पाएं",
                    step3_desc: "अपने खेत की उत्पादकता और लाभप्रदता को बढ़ावा देने के लिए तत्काल, कार्रवाई योग्य सलाह प्राप्त करें।",
                    footer_text: "© 2025 कृषि मित्र। भारतीय किसानों को सशक्त बनाना।"
                },


                en: {
                    nav_features: "Features",
                    nav_how_it_works: "How It Works",
                    nav_contact: "Contact",
                    hero_title: "Smart Farming for a Better Future",
                    hero_subtitle: "Get real-time, AI-powered advice on crops, soil, weather, and pests, right on your phone. Increase your yield and income with Krishi Mitra.",
                    hero_cta: "Get Started Now",
                    features_title: "Everything You Need in One Place",
                    feature1_title: "Crop Advisory",
                    feature1_desc: "Personalized crop recommendations based on your soil type, weather, and farm location.",
                    feature2_title: "Soil Health Guide",
                    feature2_desc: "Get instant recommendations on fertilizers and nutrients to improve your soil's health.",
                    feature3_title: "Weather Alerts",
                    feature3_desc: "Receive timely weather forecasts and alerts to protect your crops from extreme conditions.",
                    feature4_title: "Pest & Disease Detection",
                    feature4_desc: "Just upload a photo of your crop, and our AI will identify pests or diseases and suggest remedies.",
                    feature5_title: "Market Prices",
                    feature5_desc: "Track live market prices for your crops to sell at the right time for the best profit.",
                    feature6_title: "Expert Support",
                    feature6_desc: "Connect with agricultural experts for guidance and solve your farming queries.",
                    how_it_works_title: "Simple Steps to Success",
                    step1_title: "Register Your Farm",
                    step1_desc: "Create an account using your mobile number and add basic details about your farm.",
                    step2_title: "Upload Information",
                    step2_desc: "Share soil reports or upload pictures of your crops for analysis.",
                    step3_title: "Get Instant Advice",
                    step3_desc: "Receive immediate, actionable advice to boost your farm's productivity and profitability.",
                    footer_text: "© 2025 Krishi Mitra. Empowering Indian Farmers."
                },
                
                pa: {
                    nav_features: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
                    nav_how_it_works: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
                    nav_contact: "ਸੰਪਰਕ",
                    hero_title: "ਬਿਹਤਰ ਭਵਿੱਖ ਲਈ ਸਮਾਰਟ ਖੇਤੀ",
                    hero_subtitle: "ਫਸਲਾਂ, ਮਿੱਟੀ, ਮੌਸਮ ਅਤੇ ਕੀੜਿਆਂ ਬਾਰੇ ਅਸਲ-ਸਮੇਂ ਦੀ, ਏਆਈ-ਸੰਚਾਲਿਤ ਸਲਾਹ, ਸਿੱਧੇ ਆਪਣੇ ਫੋਨ 'ਤੇ ਪ੍ਰਾਪਤ ਕਰੋ। ਕ੍ਰਿਸ਼ੀ ਮਿੱਤਰ ਨਾਲ ਆਪਣੀ ਪੈਦਾਵਾਰ ਅਤੇ ਆਮਦਨ ਵਧਾਓ।",
                    hero_cta: "ਹੁਣੇ ਸ਼ੁਰੂ ਕਰੋ",
                    features_title: "ਤੁਹਾਨੂੰ ਲੋੜੀਂਦੀ ਹਰ ਚੀਜ਼ ਇੱਕ ਥਾਂ 'ਤੇ",
                    feature1_title: "ਫਸਲ ਸਲਾਹਕਾਰ",
                    feature1_desc: "ਤੁਹਾਡੀ ਮਿੱਟੀ ਦੀ ਕਿਸਮ, ਮੌਸਮ ਅਤੇ ਖੇਤ ਦੀ ਸਥਿਤੀ ਦੇ ਅਧਾਰ ਤੇ ਵਿਅਕਤੀਗਤ ਫਸਲਾਂ ਦੀਆਂ ਸਿਫਾਰਸ਼ਾਂ।",
                    feature2_title: "ਮਿੱਟੀ ਸਿਹਤ ਗਾਈਡ",
                    feature2_desc: "ਆਪਣੀ ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਨੂੰ ਸੁਧਾਰਨ ਲਈ ਖਾਦਾਂ ਅਤੇ ਪੌਸ਼ਟਿਕ ਤੱਤਾਂ ਬਾਰੇ ਤੁਰੰਤ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ।",
                    feature3_title: "ਮੌਸਮ ਚੇਤਾਵਨੀਆਂ",
                    feature3_desc: "ਆਪਣੀਆਂ ਫਸਲਾਂ ਨੂੰ ਅਤਿਅੰਤ ਸਥਿਤੀਆਂ ਤੋਂ ਬਚਾਉਣ ਲਈ ਸਮੇਂ ਸਿਰ ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ ਅਤੇ ਚੇਤਾਵਨੀਆਂ ਪ੍ਰਾਪਤ ਕਰੋ।",
                    feature4_title: "ਕੀੜੇ ਅਤੇ ਬਿਮਾਰੀ ਦੀ ਪਛਾਣ",
                    feature4_desc: "ਬੱਸ ਆਪਣੀ ਫਸਲ ਦੀ ਇੱਕ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ, ਅਤੇ ਸਾਡਾ AI ਕੀੜਿਆਂ ਜਾਂ ਬਿਮਾਰੀਆਂ ਦੀ ਪਛਾਣ ਕਰੇਗਾ ਅਤੇ ਉਪਚਾਰਾਂ ਦਾ ਸੁਝਾਅ ਦੇਵੇਗਾ।",
                    feature5_title: "ਮਾਰਕੀਟ ਕੀਮਤਾਂ",
                    feature5_desc: "ਵਧੀਆ ਮੁਨਾਫੇ ਲਈ ਸਹੀ ਸਮੇਂ 'ਤੇ ਵੇਚਣ ਲਈ ਆਪਣੀਆਂ ਫਸਲਾਂ ਦੀਆਂ ਲਾਈਵ ਮਾਰਕੀਟ ਕੀਮਤਾਂ ਨੂੰ ਟਰੈਕ ਕਰੋ।",
                    feature6_title: "ਮਾਹਰ ਸਹਾਇਤਾ",
                    feature6_desc: "ਮਾਰਗਦਰਸ਼ਨ ਲਈ ਖੇਤੀਬਾੜੀ ਮਾਹਿਰਾਂ ਨਾਲ ਜੁੜੋ ਅਤੇ ਆਪਣੇ ਖੇਤੀ ਸੰਬੰਧੀ ਸਵਾਲਾਂ ਨੂੰ ਹੱਲ ਕਰੋ।",
                    how_it_works_title: "ਸਫਲਤਾ ਲਈ ਸਧਾਰਨ ਕਦਮ",
                    step1_title: "ਆਪਣਾ ਫਾਰਮ ਰਜਿਸਟਰ ਕਰੋ",
                    step1_desc: "ਆਪਣੇ ਮੋਬਾਈਲ ਨੰਬਰ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਇੱਕ ਖਾਤਾ ਬਣਾਓ ਅਤੇ ਆਪਣੇ ਫਾਰਮ ਬਾਰੇ ਮੁੱਢਲੇ ਵੇਰਵੇ ਸ਼ਾਮਲ ਕਰੋ।",
                    step2_title: "ਜਾਣਕਾਰੀ ਅੱਪਲੋਡ ਕਰੋ",
                    step2_desc: "ਵਿਸ਼ਲੇਸ਼ਣ ਲਈ ਮਿੱਟੀ ਦੀਆਂ ਰਿਪੋਰਟਾਂ ਸਾਂਝੀਆਂ ਕਰੋ ਜਾਂ ਆਪਣੀਆਂ ਫਸਲਾਂ ਦੀਆਂ ਤਸਵੀਰਾਂ ਅਪਲੋਡ ਕਰੋ।",
                    step3_title: "ਤੁਰੰਤ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ",
                    step3_desc: "ਆਪਣੇ ਫਾਰਮ ਦੀ ਉਤਪਾਦਕਤਾ ਅਤੇ ਮੁਨਾਫੇ ਨੂੰ ਵਧਾਉਣ ਲਈ ਤੁਰੰਤ, ਕਾਰਵਾਈਯੋਗ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ।",
                    footer_text: "© 2025 ਕ੍ਰਿਸ਼ੀ ਮਿੱਤਰ। ਭਾਰਤੀ ਕਿਸਾਨਾਂ ਨੂੰ ਸ਼ਕਤੀ ਪ੍ਰਦਾਨ ਕਰਨਾ।"
                }
            };

            // --- LANGUAGE DROPDOWN LOGIC ---
            const langDropdown = document.querySelector('.language-dropdown');
            const langBtn = document.querySelector('.language-btn');
            const selectedLangText = document.getElementById('selected-lang-text');

            langBtn.addEventListener('click', () => {
                langDropdown.classList.toggle('active');
            });

            // Close dropdown if clicked outside
            window.addEventListener('click', (e) => {
                if (!langDropdown.contains(e.target)) {
                    langDropdown.classList.remove('active');
                }
            });


            // --- TRANSLATION SWITCHING LOGIC ---
            const setLanguage = (lang) => {
                const elements = document.querySelectorAll('[data-lang-key]');
                elements.forEach(el => {
                    const key = el.getAttribute('data-lang-key');
                    if (translations[lang] && translations[lang][key]) {
                        el.innerText = translations[lang][key];
                    }
                });
                // Update the main dropdown button text
                const langName = document.querySelector(`.dropdown-content a[data-lang="${lang}"]`).innerText;
                selectedLangText.innerText = langName;

                // Close dropdown after selection
                 langDropdown.classList.remove('active');
            };

            const langLinks = document.querySelectorAll('.dropdown-content a');
            langLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const selectedLang = e.target.getAttribute('data-lang');
                    setLanguage(selectedLang);
                });
            });

            // Set default language on page load
            setLanguage('en');
        });
    