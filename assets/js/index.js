const translations = {
    en: {
        nav_platform: "Manifesto",
        nav_events: "Appearances",
        nav_about: "About Astra",
        nav_involved: "Join the Fight",
        hero_headline: "POWER TO KAZANA.",
        hero_subtext: "For too long, corporate greed and centralized control from Caprica have bled our region dry. The time has come to reclaim our resources, our environment, and our future.",
        hero_action1: "Read the Manifesto",
        hero_action2: "Volunteer Now",
        platform_title: "Our Radical Vision",
        pillar1_title: "Dismantle Corporate Monopolies",
        pillar1_desc: "We will systematically break up the mega-corporations exploiting Kazana. Wealth belongs to the workers who create it. By seizing corporate assets and redistributing them to local cooperatives, we guarantee a fair economy for everyone.",
        pillar2_title: "Uncompromising Climate Action",
        pillar2_desc: "The environmental crisis demands immediate and aggressive intervention. We are committing to a total green transition by 2070, shutting down polluting industries, and heavily investing in renewable, community-owned energy grids.",
        pillar3_title: "Radical Decentralisation",
        pillar3_desc: "Caprican elites have dictated our lives for decades. We will strip power from the federal center and return it directly to regional councils and local assemblies right here in Kazana.",
        events_title: "On the Ground",
        event1_date: "12 Oct 2062",
        event1_title: "Workers' Market Visit",
        event1_desc: "Join Astra for an open discussion with local vendors about wealth redistribution and fair wages.",
        event2_date: "15 Oct 2062",
        event2_title: "Neighborhood Walk",
        event2_desc: "March alongside citizens as we demand true decentralisation and local power in the streets of our capital.",
        event3_date: "18 Oct 2062",
        event3_title: "Green Future Town Hall",
        event3_desc: "An open forum detailing our uncompromising strategy to combat climate catastrophe and hold polluters accountable.",
        about_title: "Meet Astra Day",
        about_p1: "Astra Day was born in the industrial heart of Kazana. Having witnessed firsthand the destruction caused by unchecked capitalism and environmental negligence, she dedicated her life to organizing labor movements and climate protests.",
        about_p2: "As the candidate for Kazana's Left, Astra represents a fundamental break from the corrupt political establishment. She stands with the working class, ready to fight for a decentralized, green, and equitable future.",
        footer_note: "Paid for by Kazana's Left, regional affiliate of the Rejuvenation Party.",
        footer_links_title: "Quick Links",
        footer_link1: "Manifesto",
        footer_link2: "Press Releases",
        footer_link3: "Contact Campaign",
        footer_copyright: "© 2062 Astra Day Campaign. Kazana Region, Caprica."
    },
    fr: {
        nav_platform: "Manifeste",
        nav_events: "Apparitions",
        nav_about: "À Propos d'Astra",
        nav_involved: "Rejoindre la Lutte",
        hero_headline: "LE POUVOIR À KAZANA.",
        hero_subtext: "Pendant trop longtemps, la cupidité des entreprises et le contrôle centralisé de Caprica ont saigné notre région. Le moment est venu de récupérer nos ressources, notre environnement et notre avenir.",
        hero_action1: "Lire le Manifeste",
        hero_action2: "Devenir Bénévole",
        platform_title: "Notre Vision Radicale",
        pillar1_title: "Démanteler les Monopoles",
        pillar1_desc: "Nous allons systématiquement briser les méga-entreprises qui exploitent Kazana. La richesse appartient aux travailleurs qui la créent. En saisissant les actifs corporatifs pour les redistribuer aux coopératives locales, nous garantissons une économie juste pour tous.",
        pillar2_title: "Action Climatique Intransigeante",
        pillar2_desc: "La crise environnementale exige une intervention immédiate et agressive. Nous nous engageons à une transition écologique totale d'ici 2070, en fermant les industries polluantes et en investissant massivement dans des réseaux énergétiques communautaires et renouvelables.",
        pillar3_title: "Décentralisation Radicale",
        pillar3_desc: "Les élites capricanes ont dicté nos vies pendant des décennies. Nous allons retirer le pouvoir du centre fédéral pour le rendre directement aux conseils régionaux et aux assemblées locales, ici même à Kazana.",
        events_title: "Sur le Terrain",
        event1_date: "12 Oct 2062",
        event1_title: "Visite du Marché Ouvrier",
        event1_desc: "Rejoignez Astra pour une discussion ouverte avec les vendeurs locaux sur la redistribution des richesses et les salaires équitables.",
        event2_date: "15 Oct 2062",
        event2_title: "Marche de Quartier",
        event2_desc: "Défilez aux côtés des citoyens alors que nous exigeons une véritable décentralisation et un pouvoir local dans les rues de notre capitale.",
        event3_date: "18 Oct 2062",
        event3_title: "Réunion Publique Écologique",
        event3_desc: "Un forum ouvert détaillant notre stratégie intransigeante pour combattre la catastrophe climatique et tenir les pollueurs responsables.",
        about_title: "Rencontrez Astra Day",
        about_p1: "Astra Day est née dans le cœur industriel de Kazana. Ayant été témoin de première main de la destruction causée par un capitalisme incontrôlé et la négligence environnementale, elle a consacré sa vie à organiser les mouvements syndicaux et les manifestations pour le climat.",
        about_p2: "En tant que candidate pour la Gauche de Kazana, Astra représente une rupture fondamentale avec l'establishment politique corrompu. Elle se tient aux côtés de la classe ouvrière, prête à se battre pour un avenir décentralisé, écologique et équitable.",
        footer_note: "Financé par la Gauche de Kazana, section régionale du Parti du Renouveau.",
        footer_links_title: "Liens Rapides",
        footer_link1: "Manifeste",
        footer_link2: "Communiqués de Presse",
        footer_link3: "Contacter la Campagne",
        footer_copyright: "© 2062 Campagne Astra Day. Région de Kazana, Caprica."
    }
};

let currentLang = 'en';

document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("lang-toggle");
    const langDropdown = document.getElementById("lang-dropdown");
    const langOptions = document.querySelectorAll(".lang-option");
    const currentLangText = document.getElementById("current-lang");

    // Toggle dropdown
    langToggleBtn.addEventListener("click", () => {
        langDropdown.classList.toggle("show");
    });

    // Close dropdown on outside click
    window.addEventListener("click", (e) => {
        if (!langToggleBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove("show");
        }
    });

    // Change language
    langOptions.forEach(option => {
        option.addEventListener("click", (e) => {
            const selectedLang = e.target.getAttribute("data-lang");
            if (selectedLang !== currentLang) {
                currentLang = selectedLang;
                updateLanguage(currentLang);
                
                // Update button text to language name
                if (currentLang === 'en') {
                    currentLangText.textContent = 'Alanian';
                } else if (currentLang === 'fr') {
                    currentLangText.textContent = 'Gallic';
                }
            }
            langDropdown.classList.remove("show");
        });
    });

    // Initialize text on first load
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
