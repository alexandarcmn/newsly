import axios from "axios";
import dayjs from "dayjs";

var today = new Date();
var priorDate = new Date(new Date().setDate(today.getDate() - 30));
const last30Days = dayjs(priorDate).format("YYYY-MM-DD");

const params = {
  access_key: "ef55b04ff5ebf918007353428dfda7c2",
  languages: "en",
  categories: "general,business,entertainment,health,science,sports,technology",
};

export const general = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 100,
    total: 10000,
  },
  data: [
    {
      author: "Steve Greenberg",
      title:
        "Mount Carmel’s Jordan Lynch, ex-Northern Illinois star, is loving football as much as ever",
      description:
        "Mount Carmel’s head coach Jordan Lynch before the Caravan hosts Marist, Chicago, Illinois, September 16, 2022. | Allen Cunningham / for Sun TimesAllen Cunningham, Jordan Lynch was the king of the world. Like Ali in the center of the ring after KO-ing Sonny Liston in 1964. Like DiCaprio in “Titanic” in 1997. OK, maybe not quite like those giants, but, man, did Lynch ever have it all going his way 10 years ago this fall. He was the quarterback of Northern Illinois, nobody could stop him and his Orange Bowl-bound Huskies couldn’t lose.Now 32, Lynch still has reasons to ride out to DeKalb...",
      url: "https://chicago.suntimes.com/2022/10/18/23411710/jordan-lynch-mount-carmel-caravan-loyola-ramblers",
      source: "suntimes",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:40:58+00:00",
    },
    {
      author: "Greg Dudek",
      title: "Celtics Will Put To Test NBA Coaching Theory This Season",
      description:
        "The impact of coaching in the NBA has long been debated, especially in a sport where the star players on the court seem to have way more value than those calling the shots from the sidelines. That certainly makes the Boston Celtics an interesting case study this season with a vastly inexperienced and youthful coach [&#8230;]The post Celtics Will Put To Test NBA Coaching Theory This Season appeared first on NESN.com.",
      url: "https://nesn.com/2022/10/celtics-will-put-to-test-nba-coaching-theory-this-season/",
      source: "nesn",
      image:
        "https://nesn.com/wp-content/uploads/sites/5/2022/09/Joe_Mazzulla.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:40:49+00:00",
    },
    {
      author: "Ross Cristantiello",
      title:
        "Here’s what BU is saying about media coverage of its work with a hybrid COVID virus",
      description:
        "“They’ve sensationalized the message, they misrepresent the study and its goals in its entirety.”The post Here&#8217;s what BU is saying about media coverage of its work with a hybrid COVID virus appeared first on Boston.com.",
      url: "https://www.boston.com/news/coronavirus/2022/10/18/bu-media-coverage-work-hybrid-covid-virus/",
      source: "boston",
      image:
        "https://www.boston.com/wp-content/themes/bdc-2020/images/tease-defaults/fallback-tease-image-4x3-medium.png",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:41:15+00:00",
    },
    {
      author: "Jeremy Simes",
      title:
        "Onion Lake Cree Nation asks Saskatchewan to stop selling Crown land",
      description:
        "The province says Crown land sales are currently paused as it collects feedback on how it can change consultation with Indigenous groups.",
      url: "https://leaderpost.com/news/saskatchewan/onion-lake-cree-nation-asks-saskatchewan-to-stop-selling-crown-land",
      source: "leaderpost",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:43:42+00:00",
    },
    {
      author: "Rebecca Barnabi",
      title: "Local Girl Scouts organization receives $800K donation",
      description:
        "Philanthropist MacKenzie Scott has donated $800,000 to the Girl Scouts of Virginia Skyline.Scott, the third wealthiest woman in the United States, is a novelist and the ex-wife of Jeff Bezos.The donation will enable the organization to provide life-changing experiences, mentorship and programming, according to a press release.The donation comes just after October 11, which was International Day of the Girl and Give to Women and Girls Day.Scott’s donation is part of an $84.5 million donation awarded to Girls Scouts of the USA and 29 local councils selected by Scott. The donation is the largest...",
      url: "https://augustafreepress.com/local-girl-scouts-organization-receives-800k-donation/",
      source: "augustafreepress",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:46:17+00:00",
    },
    {
      author: "Sue Haasler",
      title:
        "Emmerdale spoilers: Major exit for pregnant Chloe as she makes huge decision?",
      description: "Chloe feels the pressure.",
      url: "https://metro.co.uk/2022/10/18/emmerdale-spoilers-exit-for-pregnant-chloe-as-she-makes-decision-17540722/",
      source: "Metro",
      image: null,
      category: "general",
      language: "en",
      country: "gb",
      published_at: "2022-10-18T22:50:00+00:00",
    },
    {
      author: "Larry Tomczak",
      title: "Midterm election will make or break America",
      description:
        'Watch Larry\'s most recent "Week in Review" video. In the last major election, some sat out. Radicals won out. Now we must vote out those harming our nation before more damage is done. Remember the words of warning from Thomas Jefferson: "All tyranny needs to gain a foothold is for people of good conscience to&#8230;The post Midterm election will make or break America appeared first on WND.',
      url: "https://www.wnd.com/2022/10/midterm-election-will-make-break-america/",
      source: "wnd",
      image:
        "http://www.wnd.com/wp-content/uploads/2022/01/flags-americans-patriotic-covid-masks-military-defense-jpg.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:47:52+00:00",
    },
    {
      author: "Parker Gabriel",
      title:
        "RB Melvin Gordon “didn’t do anything wrong,” Nathaniel Hackett says after workload dwindled",
      description:
        "As the second half and overtime wore on Monday night, ESPN cameras showed Denver running back Melvin Gordon on the sideline without his helmet on and clearly frustrated.",
      url: "https://www.denverpost.com/2022/10/18/melvin-gordon-broncos-workload-dwindled/",
      source: "photos",
      image:
        "https://www.denverpost.com/wp-content/uploads/2022/10/TDP-L-Broncos-Colts-RJS-14574.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:43:22+00:00",
    },
    {
      author: "Christopher Nardi",
      title:
        "CSIS worried Freedom Convoy protests were being used as ‘recruiting ground’ for violent ‘hardened elements’",
      description:
        "There was also growing concern that some of the millions of dollars raised for the Freedom Convoy was coming from foreign threat actors hoping to destabilize Canada",
      url: "https://nationalpost.com/news/politics/csis-worried-freedom-convoy-protests-were-being-used-as-recruiting-ground-for-violent-hardened-elements",
      source: "nationalpost",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:48:38+00:00",
    },
    {
      author: "Jade Martinez-Pogue",
      title: "Lompoc Police make second arrest in February fatal shooting",
      description:
        "The Lompoc Police Department arrested a 17-year-old man for involvement in the murder of 37-year-old Maurilio Delacruz in February.The post Lompoc Police make second arrest in February fatal shooting appeared first on News Channel 3-12.",
      url: "https://keyt.com/news/santa-maria-north-county/2022/10/18/lompoc-police-make-second-arrest-in-february-murder/",
      source: "keyt",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:52:12+00:00",
    },
    {
      author: "Trend Dummy",
      title:
        "New Orleans Saints vs Arizona Cardinals Pick, Betting Odds, Thursday Night Trends, Props",
      description:
        "The post New Orleans Saints vs Arizona Cardinals Pick, Betting Odds, Thursday Night Trends, Props appeared first on National Football Post.",
      url: "https://www.nationalfootballpost.com/best-bets/new-orleans-saints-vs-arizona-cardinals-pick-betting-odds-thursday-night-trends-props/",
      source: "nationalfootballpost",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:54:45+00:00",
    },
    {
      author: "artappraiser",
      title: 'WATCH: Democrats have "been',
      description: "In reply to BLM and the George Floyddupe deleted ",
      url: "http://dagblog.com/comment/321225#comment-321225",
      source: "dagblog",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:45:51+00:00",
    },
    {
      author: "Petty Officer 1st Class Abigayle Lutz",
      title: "NHHC Celebrates Navy's 247th Birthday [Image 3 of 6]",
      description:
        "221018-N-FK318-1073WASHINGTON NAVY YARD (Oct. 18, 2022) Retired U.S. Navy Vice Adm. Al Konetzni, Navy Museum Development Foundation (NMDF) Board President, speaks to audience members at the National Museum of the U.S. Navy (NMUSN) during a ceremony celebrating the Navy’s 247th birthday. During the ceremony, Secretary of the Navy Carlos Del Toro announced the U.S. Navy’s preferred location for a new NMUSN, which would be on land adjacent to the Washington Navy Yard that would be acquired either through a land exchange or direct purchase. This would allow the museum to offer the general...",
      url: "https://www.dvidshub.net/image/7469555/nhhc-celebrates-navys-247th-birthday",
      source: "dvidshub",
      image:
        "https://cdn.dvidshub.net/media/thumbs/photos/2210/7469555/250x167_q75.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:14:39+00:00",
    },
    {
      author: "Emma Koehn",
      title:
        "This Aussie food business is worth $1.5b as sport stars, super giant invest",
      description:
        "Mexican quick-service restaurant Guzman y Gomez has attracted more support from Aware Super and high-profile Australian athletes who have backed the chain.",
      url: "https://www.watoday.com.au/business/companies/this-aussie-food-business-is-worth-1-5b-as-sport-stars-super-giant-invest-20221019-p5bqxh.html?ref=rss&utm_medium=rss&utm_source=rss_business",
      source: "watoday",
      image:
        "https://static.ffx.io/images/$zoom_0.5842803703703704%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_107%2C$y_138/t_crop_custom/q_86%2Cf_jpg/59ad07b57856bc4174cef548f8bd3ee56e80bef8",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-18T23:14:39+00:00",
    },
    {
      author: "John Dotson",
      title: "Penelope Cruz is stunning in sheer black for Vogue Spain",
      description:
        "Penelope Cruz looks incredible in a cheetah print catsuit for a photo shoot. The actress shared the image to her 6.4 million followers on Instagram which is from a Vogue Spain cover shoot for the magazine. The picture is one of many from the magazine&#8217;s September coverage of the 48-year-old",
      url: "https://www.monstersandcritics.com/celebrity/penelope-cruz-is-stunning-in-sheer-black-for-vogue-spain/",
      source: "monstersandcritics",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:12:12+00:00",
    },
    {
      author: "David Badash",
      title: "Watch Live: Val Demings vs. Marco Rubio US Senate Debate",
      description:
        "Just started: debate between Democratic Rep. Val Demings and Republican Senator Marco Rubio for the seat Rubio now holds from Florida. Watch live:The post Watch Live: Val Demings vs. Marco Rubio US Senate Debate appeared first on The New Civil Rights Movement.",
      url: "https://www.thenewcivilrightsmovement.com/2022/10/watch-live-val-demings-vs-marco-rubio-us-senate-debate/",
      source: "thenewcivilrightsmovement",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:07:53+00:00",
    },
    {
      author: null,
      title:
        "Biden Administration to Release 15Mln Barrels from US Strategic Oil Reserve",
      description: "DETAILS TO FOLLOW",
      url: "https://sputniknews.com/20221018/biden-administration-to-release-15mln-barrels-from-us-strategic-oil-reserve--1102059792.html",
      source: "en",
      image: null,
      category: "general",
      language: "en",
      country: "ru",
      published_at: "2022-10-18T23:08:58+00:00",
    },
    {
      author: "",
      title: "To avoid buying spoiled frozen food",
      description:
        "To avoid buying spoiled frozen food, check if there is frost on the package.",
      url: "https://english.chosun.com/site/data/html_dir/2022/10/19/2022101900578.html",
      source: "english",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:07:04+00:00",
    },
    {
      author: "Nicole Farley",
      title: "A look inside TikTok’s new automated Smart Performance Campaigns",
      description:
        "The new campaign type was announced today to help advertisers connect with the right audiences, drive growth, and deliver value.The post A look inside TikTok&#8217;s new automated Smart Performance Campaigns appeared first on Search Engine Land.",
      url: "https://searchengineland.com/a-look-inside-tiktoks-new-automated-smart-performance-campaigns-388831",
      source: "searchengineland",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:12:44+00:00",
    },
    {
      author: "Mark Frauenfelder",
      title: "Why gift cards are gold mines for scammers",
      description:
        "Telephone scammers who pretend to be IRS or FBI agents and prey on elders tell their potential victims that they will be arrested unless they give them gift cards. It sounds like a con that wouldn't fool anyone, but a lot of people fall for it. &#8212; Read the rest",
      url: "https://boingboing.net/2022/10/18/why-gift-cards-are-gold-mines-for-scammers.html",
      source: "boingboing",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:12:17+00:00",
    },
    {
      author: null,
      title: "Kaçak tütüne hapis cezası",
      description:
        "AK Parti, tütün ve tütün mamûllerinin kaçak kullanımının önlenmesine ilişkin 11 maddelik yasa teklifini TBMM Başkanlığı...",
      url: "https://www.yenisafak.com/gundem/kacak-tutune-hapis-cezasi-3865082",
      source: "Yeni Safak",
      image:
        "https://img.piri.net/mnresize/500/-/resim/imagecrop/2022/10/19/02/09/resized_832f5-0eafc6c2kc4b1ranc59feyh_tc3bctc3bcn_tarlasc4b1__panoramio.jpg Kaçak tütüne hapis cezası https://www.yenisafak.com/gundem/kacak-tutune-hapis-cezasi-3865082",
      category: "general",
      language: "en",
      country: "tr",
      published_at: "2022-10-18T23:11:08+00:00",
    },
    {
      author: null,
      title: "Wind farms may pose risks for condor repopulation program",
      description:
        "The release in Argentina of two Andean condors that had been born in captivity has sparked concerns that a proposed wind farm may endanger such birds.",
      url: "https://www.latimes.com/world-nation/story/2022-10-18/wind-farms-may-pose-risks-for-condor-repopulation-program",
      source: "latimes",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:10:33+00:00",
    },
    {
      author: "Duro Ikhazuagbe",
      title: "Onuachu Getting Groove Back, Scores Brace in Belgium",
      description:
        "Duro Ikhazuagbe Super Eagles forward, Paul Onuachu, is gradually getting his groove back after the injury that set him back before the Belgian topflight season kicked off. &#160; Onuachu scored",
      url: "https://www.thisdaylive.com/index.php/2022/10/19/onuachu-getting-groove-back-scores-brace-in-belgium/",
      source: "thisdaylive",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:23:50+00:00",
    },
    {
      author: "Uchechukwu Nnaike",
      title: "Averting Future ASUU Strikes",
      description:
        "Last week, the Academic Staff Union of Universities suspended its eight-month-old strike against its earlier resolve that the government must meet all its demands before backing down. Uchechukwu Nnaike examines",
      url: "https://www.thisdaylive.com/index.php/2022/10/19/averting-future-asuu-strikes/",
      source: "thisdaylive",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:23:00+00:00",
    },
    {
      author: "Ebere Nwoji",
      title: "Brokers Rekindle Hope on Staco Assurance",
      description:
        "Ebere Nwoji Insurance Brokers, strategic stakeholders and clients have expressed their renewed confidence in the capability of the newly revived Staco Insurance Plc to give excellent insurance services in the",
      url: "https://www.thisdaylive.com/index.php/2022/10/19/brokers-rekindle-hope-on-staco-assurance/",
      source: "thisdaylive",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:22:00+00:00",
    },
    {
      author: "Charlie Lewis",
      title: "The BoM rebranding is a prank, surely?",
      description:
        "Was the Bureau's new branding nothing but an elaborate hoax? Crikey delves into the AusTender contract for proof.The post The BoM rebranding is a prank, surely? appeared first on Crikey.",
      url: "https://www.crikey.com.au/2022/10/19/exclusive-bom-rebrand-the-bureau-prank/",
      source: "crikey",
      image: null,
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-18T23:18:11+00:00",
    },
    {
      author: "AP News",
      title: "Grand jury: New indictment in California dive boat tragedy",
      description:
        "A federal grant jury has issued a new indictment against a dive boat captain, alleging that he acted with gross negligence when a 2019 fire aboard his vessel led to the deaths of 34 people off the Southern California coast",
      url: "https://www.mymotherlode.com/news/state/2796611/grand-jury-new-indictment-in-california-dive-boat-tragedy.html",
      source: "mymotherlode",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:16:58+00:00",
    },
    {
      author: "Simon Johanson",
      title: "BHP shakes off wet weather and global economic storm",
      description:
        "Mining giant says it’s well positioned to withstand the bad weather and ongoing global economic uncertainty.",
      url: "https://www.brisbanetimes.com.au/business/companies/bhp-shakes-off-wet-weather-and-global-economic-storm-20221019-p5bqzg.html?ref=rss&utm_medium=rss&utm_source=rss_feed",
      source: "Brisbane Times",
      image:
        "https://static.ffx.io/images/$zoom_0.5298%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_39/t_crop_custom/q_86%2Cf_jpg/9f4bf002a737ae30917d172e9ae8eefc48239868",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-18T23:24:32+00:00",
    },
    {
      author: "Simon Johanson",
      title: "BHP shakes off wet weather and global economic storm",
      description:
        "Mining giant says it’s well positioned to withstand the bad weather and ongoing global economic uncertainty.",
      url: "https://www.watoday.com.au/business/companies/bhp-shakes-off-wet-weather-and-global-economic-storm-20221019-p5bqzg.html?ref=rss&utm_medium=rss&utm_source=rss_business",
      source: "watoday",
      image:
        "https://static.ffx.io/images/$zoom_0.5298%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_39/t_crop_custom/q_86%2Cf_jpg/9f4bf002a737ae30917d172e9ae8eefc48239868",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-18T23:24:32+00:00",
    },
    {
      author: "Simon Johanson",
      title: "BHP shakes off wet weather and global economic storm",
      description:
        "Mining giant says it’s well positioned to withstand the bad weather and ongoing global economic uncertainty.",
      url: "https://www.theage.com.au/business/companies/bhp-shakes-off-wet-weather-and-global-economic-storm-20221019-p5bqzg.html?ref=rss&utm_medium=rss&utm_source=rss_feed",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.5298%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_39/t_crop_custom/q_86%2Cf_jpg/9f4bf002a737ae30917d172e9ae8eefc48239868",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-18T23:24:32+00:00",
    },
    {
      author: "Taya Fast",
      title: "Kelowna RCMP, BCAA remind drivers to ‘slow down and move over’",
      description:
        "Kelowna RCMP handed out more than 100 warnings to drivers on Tuesday who failed to slow down and move over when passing vehicles with flashing lights.",
      url: "https://globalnews.ca/news/9208656/kelowna-rcmp-bcaa-slow-down-and-move-over-blitz/",
      source: "globalwinnipeg",
      image:
        "https://globalnews.ca/wp-content/uploads/2022/10/October-18-2022-Slow-down-move-over.jpg?quality=85&strip=all&w=720&h=480&crop=1",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:26:40+00:00",
    },
    {
      author: "Dan Beedie",
      title:
        "Judge gives Huerfano Co. government final order to properly fund DA’s office",
      description:
        "HUERFANO CO., Colo. (KRDO) -- An Huerfano County judge has issued a final order to properly fund the southern Colorado community’s District Attorney’s office.&#160; The judge found that underfunding for the 3rd Judicial District Attorney’s Office by Huerfano County Commissioners “created numerous legal ethical and operational problems” for the community. &#160; According to the finalThe post Judge gives Huerfano Co. government final order to properly fund DA&#8217;s office appeared first on KRDO.",
      url: "https://krdo.com/news/2022/10/18/judge-gives-huerfano-co-government-final-order-to-properly-fund-das-office/",
      source: "krdo",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:23:37+00:00",
    },
    {
      author: "Samantha Serbin",
      title:
        "Comcast & Centurylink provide internet restoration timelines for SWFL customers",
      description:
        "Internet issues continue to be a struggle for people all across Southwest Florida. ABC7 is getting dozens of messages daily about connectivity concerns regarding Comcast and CenturyLink.The post Comcast & Centurylink provide internet restoration timelines for SWFL customers appeared first on ABC7 Southwest Florida.",
      url: "https://abc-7.com/news/local/2022/10/18/comcast-centurylink-provide-internet-restoration-timelines-for-swfl-customers/",
      source: "abc-7",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:25:23+00:00",
    },
    {
      author: "Katelyn Newberg",
      title: "Final co-defendant in Hells Angels case arrested",
      description:
        "The last of eight men recently indicted on racketeering charges in connection with a May highway shooting that injured members of a rival motorcycle group was booked into jail on Monday.",
      url: "https://www.reviewjournal.com/crime/courts/final-co-defendant-in-hells-angels-case-arrested-2659935/",
      source: "lvrj",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:24:37+00:00",
    },
    {
      author: "Thomas Mitchell",
      title:
        "Stranger Things and Jeffrey Dahmer boost Netflix as it shakes up business model",
      description:
        "Netflix has added millions of new subscribers off the back of some of its most popular shows, and now the streamer is preparing to crackdown on password sharing.",
      url: "https://www.watoday.com.au/culture/tv-and-radio/stranger-things-and-jeffrey-dahmer-boost-netflix-as-it-shakes-up-business-model-20221019-p5bqy3.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "watoday",
      image:
        "https://static.ffx.io/images/$zoom_0.3106%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_31%2C$y_0/t_crop_custom/q_86%2Cf_jpg/38ec111c6b1c4a545cadd55f0348ea16690723f7",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-18T23:48:30+00:00",
    },
    {
      author: "Art Moore",
      title: "U.S. military gets shocking rank for first time",
      description:
        'An annual ranking of U.S. military strength has ranked the nation\'s armed forces as "weak" for the first time. American armed forces are "at growing risk of not being able to meet the demands of defending America’s vital national interests," assessed the Heritage Foundation\'s 2023 Index of U.S. Military Strength, the Washington Examiner reported. "It&#8230;The post U.S. military gets shocking rank for first time appeared first on WND.',
      url: "https://www.wnd.com/2022/10/u-s-military-gets-shocking-rank-first-time/",
      source: "wnd",
      image:
        "http://www.wnd.com/wp-content/uploads/2021/06/cool-marines-soldiers-warriors-military-defense.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:50:12+00:00",
    },
    {
      author: "Holly Thompson",
      title:
        "Perth duo charged with firing potato gun at man on scooter who lost his eye",
      description:
        "“It would appear those involved thought it would be fun to use potatoes as projectiles aimed at people minding their own business and enjoying our coastal strip,” police said.",
      url: "https://www.smh.com.au/national/western-australia/perth-duo-charged-with-firing-potato-gun-at-man-on-scooter-who-lost-his-eye-20221019-p5bqzz.html?ref=rss&utm_medium=rss&utm_source=rss_national",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$zoom_1.0347%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_188/t_crop_custom/q_86%2Cf_jpg/627ff2d5fdbcb8228935d0e26211ddf533e72255",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-18T23:49:30+00:00",
    },
    {
      author: "Holly Thompson",
      title:
        "Perth duo charged with firing potato gun at man on scooter who lost his eye",
      description:
        "“It would appear those involved thought it would be fun to use potatoes as projectiles aimed at people minding their own business and enjoying our coastal strip,” police said.",
      url: "https://www.brisbanetimes.com.au/national/western-australia/perth-duo-charged-with-firing-potato-gun-at-man-on-scooter-who-lost-his-eye-20221019-p5bqzz.html?ref=rss&utm_medium=rss&utm_source=rss_national",
      source: "brisbanetimes",
      image:
        "https://static.ffx.io/images/$zoom_1.0347%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_188/t_crop_custom/q_86%2Cf_jpg/627ff2d5fdbcb8228935d0e26211ddf533e72255",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-18T23:49:30+00:00",
    },
    {
      author: "Holly Thompson",
      title:
        "Perth duo charged with firing potato gun at man on scooter who lost his eye",
      description:
        "“It would appear those involved thought it would be fun to use potatoes as projectiles aimed at people minding their own business and enjoying our coastal strip,” police said.",
      url: "https://www.watoday.com.au/national/western-australia/perth-duo-charged-with-firing-potato-gun-at-man-on-scooter-who-lost-his-eye-20221019-p5bqzz.html?ref=rss&utm_medium=rss&utm_source=rss_national",
      source: "watoday",
      image:
        "https://static.ffx.io/images/$zoom_1.0347%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_188/t_crop_custom/q_86%2Cf_jpg/627ff2d5fdbcb8228935d0e26211ddf533e72255",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-18T23:49:30+00:00",
    },
    {
      author: "Emily Mertz",
      title: "2 new indoor sports fields officially open in south Edmonton",
      description:
        "With the grand opening of Edmonton South Soccer Centre expansion, there are now two more indoor fields for soccer, inline hockey, ball hockey and lacrosse sports communities.",
      url: "https://globalnews.ca/news/9207589/edmonton-south-soccer-centre-expansion/",
      source: "globalwinnipeg",
      image:
        "https://globalnews.ca/wp-content/uploads/2022/10/Still-2022-10-18-14h28m17s042.jpg?quality=85&strip=all&w=720&h=480&crop=1",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:49:15+00:00",
    },
    {
      author: "Dennis Pope",
      title:
        "Inland college notebook: RCC and Mt. SAC football teams set for showdown",
      description:
        "The Riverside City College and Mt. San Antonio College football teams are both undefeated and No. 1 and No. 3, respectively, in the state rankings.",
      url: "https://www.dailybulletin.com/2022/10/18/inland-college-notebook-rcc-and-mt-sac-football-teams-set-for-showdown/",
      source: "dailybulletin",
      image:
        "https://www.dailybulletin.com/wp-content/uploads/2022/10/RPE-L-FB-RCC-0911-01-WL.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:50:22+00:00",
    },
    {
      author: "Reuters",
      title: "Amazon to stream first-ever ‘Black Friday’ game in 2023",
      description:
        "NEW YORK &#8212; The National Football League (NFL) announced its first-ever &#8220;Black Friday&#8221; game will stream on Amazon Prime Video next year, building on the relationship between the league and the streaming giant. The NFL already has a stranglehold on Thanksgiving broadcasts, with its annual lineup of Thursday games as common as turkey on the [&#8230;]",
      url: "https://nationalpost.com/pmn/entertainment-pmn/amazon-to-stream-first-ever-black-friday-game-in-2023-3",
      source: "nationalpost",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:50:44+00:00",
    },
    {
      author: "Simon Little",
      title:
        "District of Sechelt sues residents forced from subdivision by sinkholes",
      description:
        "\"It's an attempt to coerce us into dropping some of the lawsuits we have against the district of Sechelt right now, they're just trying to bully us, basically,\" said Ed Pednaud.",
      url: "https://globalnews.ca/news/9207817/sechelt-sues-seawatch-resident/",
      source: "globaltvbc",
      image:
        "https://globalnews.ca/wp-content/uploads/2022/10/seawatch.png?w=720&h=480&crop=1",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:47:01+00:00",
    },
    {
      author: null,
      title: "EU top diplomat denies 'jungle' remark was racist",
      description:
        "Josep Borrell has apologized for offending people with his remarks, saying he used the word 'jungle' to mean the increasing rise of lawlessness around the world.",
      url: "https://www.dw.com/en/eu-top-diplomat-denies-jungle-remark-was-racist/a-63484246?maca=en-rss-en-top-1022-rdf",
      source: "Deutsche Welle",
      image: null,
      category: "general",
      language: "en",
      country: "de",
      published_at: "2022-10-18T23:48:00+00:00",
    },
    {
      author: "ARNIE STAPLETON",
      title: "Tom Brady is losing more than just his cool",
      description:
        "Games are starting to slip from the seven-time Super Bowl champion’s grasp and so, too, is his touch.",
      url: "https://www.theage.com.au/sport/nfl/tom-brady-is-losing-more-than-just-his-cool-20221019-p5bqy8.html?ref=rss&utm_medium=rss&utm_source=rss_feed",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.5319280423280422%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_58%2C$y_0/t_crop_custom/q_86%2Cf_jpg/b9abb313180ddd3a3fb6628c0a7655257335a732",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-19T00:00:14+00:00",
    },
    {
      author: "By Caleb Johnson, Lifestyle Writer",
      title:
        "NIU School of Theatre and Dance to perform &#8216;She Kills Monsters&#8217;",
      description:
        "NIU School of Theatre and Dance will be hosting its third production of the season. Next up is “She Kills Monsters” by Qui Nguyen, directed by guest director Kendra Holton.  Holton chose to be a part of this play because she was excited to work on a production that explores LGBTQ+ themes, as they are something she identifies with, said Colton Loeb, assistant director and senior theater studies major. Loeb said he is excited for the play and is happy about the costumes and lighting design of the show that the production crew worked very hard on. “It’s going to be a visually stunning...",
      url: "https://northernstar.info/98989/lifestyle/niu-school-of-theatre-and-dance-to-perform-she-kills-monsters/",
      source: "northernstar",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:00:35+00:00",
    },
    {
      author: "Ruby Gonzales",
      title: "Driver charged in deadly Pomona taco stand crash",
      description:
        "The hit-and-run left one man dead and injured 12 others, police said.",
      url: "https://www.sgvtribune.com/2022/10/18/driver-charged-in-deadly-pomona-taco-stand-crash/",
      source: "sgvtribune",
      image:
        "https://www.sgvtribune.com/wp-content/uploads/2022/10/thinkstockphotos-95403440.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:56:38+00:00",
    },
    {
      author: "Sun-Times staff",
      title: "Where to watch Pritzker and Bailey gubernatorial debate",
      description:
        "Facebook; Tyler LaRiviere/Chicago Sun-Times file Gov. J.B. Pritzker and state Sen. Darren Bailey, the GOP nominee for governor, will face off Tuesday evening in their second televised gubernatorial debate.The 60-minute televised debate will air on WGN-TV and stream on YouTube. It will also be broadcast throughout Illinois on various Nexstar stations.",
      url: "https://chicago.suntimes.com/politics/2022/10/18/23411797/watch-pritzker-and-bailey-second-debate",
      source: "suntimes",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:59:07+00:00",
    },
    {
      author: "Sarare",
      title:
        "Terror In Israel: Shooting Attack In Shomron, Bullets Found In Bedroom",
      description:
        "Terrorists opened fire at the yishuv of Shaked in the Shomron on Tuesday morning. Bullet holes and bullets were found in two homes in the yishuv. B&#8217;Chasdei Hashem, there were no injuries. IDF forces launched a manhunt for the terrorists. One of the homes that was hit is the home of the Chassid family, whose family members were at home at the time of the shooting and miraculously weren&#8217;t injured. &#8220;Suddenly we heard a volley of gunfire and felt a hit in the house,&#8221; the father of the family, Ariel, told Channel 12 News, adding that after the shooting ended, they found...",
      url: "https://www.theyeshivaworld.com/news/headlines-breaking-stories/2130911/terror-in-israel-shooting-attack-in-shomron-bullets-found-in-bedroom.html",
      source: "theyeshivaworld",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:55:48+00:00",
    },
    {
      author: "Wayne Moore",
      title:
        "West Kelowna win third in a row, beating Powell River 5-1 Tuesday (BCHL)",
      description:
        "The West Kelowna Warriors spotted Powell River a 1-0 lead, then stormed back with five straight goals in a 5-1 victory over the Kings Tuesday afternoon. It was the Warriors third win in a row, and second straight at the BCHL Showcase in Chilliwack. The Warriors found themselves down 1-0 early when P...",
      url: "https://www.castanet.net/news/BCHL/391350/West-Kelowna-win-third-in-a-row-beating-Powell-River-5-1-Tuesday",
      source: "Castanet",
      image: "https://www.castanet.net/content/2022/10/warriors_p3628382.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:56:00+00:00",
    },
    {
      author: "ARNIE STAPLETON",
      title: "Tom Brady is losing more than just his cool",
      description:
        "Games are starting to slip from the seven-time Super Bowl champion’s grasp and so, too, is his touch.",
      url: "https://www.brisbanetimes.com.au/sport/nfl/tom-brady-is-losing-more-than-just-his-cool-20221019-p5bqy8.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "brisbanetimes",
      image:
        "https://static.ffx.io/images/$zoom_0.5319280423280422%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_58%2C$y_0/t_crop_custom/q_86%2Cf_jpg/b9abb313180ddd3a3fb6628c0a7655257335a732",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-19T00:00:14+00:00",
    },
    {
      author: "Jessica A. York",
      title:
        "Santa Cruz County accepting applications for Sheriff Office ‘inspector general’",
      description:
        "Given the blessing of county leaders Tuesday, the search for a candidate to serve as an independent third-party overseer for Santa Cruz County Sheriff's Office will soon commence.",
      url: "https://www.santacruzsentinel.com/2022/10/18/santa-cruz-county-accepting-applications-for-sheriff-office-inspector-general/",
      source: "santacruzsentinel",
      image:
        "https://www.santacruzsentinel.com/wp-content/uploads/2018/11/0502_sto_gavelclosegeneric4-1.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-18T23:59:03+00:00",
    },
    {
      author: "Douglas Underwood",
      title: "Best Resort In Haiti",
      description:
        "Looking for an unforgettable experience? Look no further than the best resort in Haiti! Our luxury resort offers everything you could want and more. From pristine beaches to lush tropical gardens, our property is the perfect place to relax and enjoy all that nature has to offer. Come and discover why we are considered the best resort in Haiti! Best Resort In Haiti Royal Decameron Indigo Beach Resort & Spa Nestled on the beautiful beaches of Haiti, the Royal Decameron Indigo Beach Resort & Spa is a perfect getaway for those seeking both relaxation and adventure. The resort offers anThe post Best...",
      url: "https://enctoday.com/best-resort-in-haiti/",
      source: "enctoday",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:00:46+00:00",
    },
    {
      author: "Jin Hui",
      title: "MP checked for ‘inappropriate’ spruiking",
      description:
        "Clarinda Labor MP Meng Heang Tak has reportedly offended Springvale monks for “hijacking” a solemn festival with a pre-election pitch....The post MP checked for &#8216;inappropriate&#8217; spruiking appeared first on Dandenong Star Journal.",
      url: "https://dandenong.starcommunity.com.au/news/2022-10-19/mp-checked-for-inappropriate-spruiking/",
      source: "greaterdandenongweekly",
      image: null,
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-18T23:56:16+00:00",
    },
    {
      author: "Bay Area Home Report",
      title: "Sale closed in Milpitas: $1.6 million for a three-bedroom home",
      description:
        "The property located in the 400 block of Martil Way in Milpitas was sold on Sept. 2, 2022 for $1,644,500, or $991 per square foot. The house built in 1978 has an interior space of 1,659 square feet. The property features three bedrooms, two bathrooms, a garage, and two parking spaces. It sits on a 5,775-square-foot lot, which also has a pool.",
      url: "https://www.mercurynews.com/2022/10/18/sale-closed-in-milpitas-1-6-million-for-a-three-bedroom-home/",
      source: "The Mercury News",
      image:
        "https://www.mercurynews.com/wp-content/uploads/2022/10/milpitas-1.jpeg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:30:03+00:00",
    },
    {
      author: "GIANINA SCHWANECKE",
      title: "Police name woman killed in Te Puke crash",
      description:
        "Police have named the woman who died following at the North Island community of Te Puke on Sunday.",
      url: "https://www.stuff.co.nz/dominion-post/news/hawkes-bay/130220134/police-name-woman-killed-in-te-puke-crash.html",
      source: "Stuff.co.nz",
      image:
        "https://resources.stuff.co.nz/content/dam/images/4/z/1/c/9/t/image.related.StuffThumbnail.90x60.25j2hy.png/1666139197080.jpg",
      category: "general",
      language: "en",
      country: "nz",
      published_at: "2022-10-19T00:26:37+00:00",
    },
    {
      author: "Airman 1st Class J. Michael Pena",
      title: "Aircraft land during RED-FLAG-Alaska 23-1 [Image 2 of 2]",
      description:
        "A Royal Air Force C-130J assigned to the No. 47 Squadron from RAF Brize Norton, England, lands on the flight line during RED FLAG-Alaska 23-1 on Joint Base Elmendorf-Richardson, Alaska, Oct. 14, 2022. RF-A serves as an ideal platform for international engagement and the exercise has a long history of including allies and partners. This enables all involved to exchange tactics, techniques and procedures while improving interoperability. (U.S. Air Force photo by Airman 1st Class J. Michael Peña)",
      url: "https://www.dvidshub.net/image/7469653/aircraft-land-during-red-flag-alaska-23-1",
      source: "dvidshub",
      image:
        "https://cdn.dvidshub.net/media/thumbs/photos/2210/7469653/250x167_q75.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:29:36+00:00",
    },
    {
      author: "-",
      title: "Report to congress inspires college students",
      description:
        "Many Chinese university students have said they are inspired by the pivotal report that Xi Jinping delivered to the 20th National Congress of the Communist Party of China and are determined to incorporate their own dreams into the realization of the nation’s rejuvenation. In dormitories, classrooms and canteens, they watched the opening session using cellphones, [&#8230;]The post Report to congress inspires college students appeared first on MACAU DAILY TIMES 澳門每日時報.",
      url: "https://macaudailytimes.com.mo/report-to-congress-inspires-college-students.html?utm_source=rss&utm_medium=rss&utm_campaign=report-to-congress-inspires-college-students",
      source: "macaudailytimes",
      image: null,
      category: "general",
      language: "en",
      country: "mo",
      published_at: "2022-10-19T00:20:52+00:00",
    },
    {
      author: null,
      title: "Azerbaijan Public TV Enlists Singing Children To Insult Macron",
      description:
        "By Ulkar Natiqqizi*(Eurasianet) &#8212; Baku’s ongoing campaign against French President Emmanuel Macron has now drawn in Azerbaijan’s children, a group of whom were enlisted to sing a song on public television insulting him and accusing him of being dishonest and pro-Armenian. The three-minute song, posted on the network’s Facebook page on October 18, features a presenter, Aziz Aliyev, singing along with a chorus of children.&nbsp;“He is pro-Armenian,” Aliyev sings.&#8220;What can you say to this person?&nbsp;He gives us false promisesHe&nbsp;dances with PashinyanHe humiliated...",
      url: "https://api.follow.it/track-rss-story-click/v3/Qw9d99ManWelNYudyNjwLvdczOo_8W9B",
      source: "eurasiareview",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:25:48+00:00",
    },
    {
      author: "Kieran Nicholson",
      title: "Inmate in downtown Denver jail found dead in a housing unit",
      description:
        "Deputies find an inmate in a downtown Denver jail housing unit in an unresponsive state and he is pronounced dead at the scene.",
      url: "https://www.denverpost.com/2022/10/18/denver-downtown-jail-death/",
      source: "photos",
      image:
        "https://www.denverpost.com/wp-content/uploads/2017/11/cdxxstock_kw__mg_1838x.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:24:33+00:00",
    },
    {
      author: null,
      title: "Anlamanın zahmeti ve Aliya İzetbegoviç",
      description:
        "Prof. Dr. Mahmut Hakkı Akın / İstanbul Medeniyet Üniversitesi İnsanları, eserleri ve olayları gerçekten anlamak, ciddi ...",
      url: "https://www.yenisafak.com/dusunce-gunlugu/anlamanin-zahmeti-ve-aliya-izetbegovic-3865092",
      source: "Yeni Safak",
      image:
        "https://img.piri.net/mnresize/500/-/resim/imagecrop/2022/10/19/03/23/resized_700be-25b408dedusuncegunlugu18ekim2022.jpg Anlamanın zahmeti ve Aliya İzetbegoviç https://www.yenisafak.com/dusunce-gunlugu/anlamanin-zahmeti-ve-aliya-izetbegovic-3865092",
      category: "general",
      language: "en",
      country: "tr",
      published_at: "2022-10-19T00:26:03+00:00",
    },
    {
      author: "BizWest staff",
      title: "Capital Tacos to bring three Tex-Mex restaurants to Boulder area",
      description:
        "Father-daughter franchisee duo Jason Scoby and Marilyn Scoby have inked a deal to open three Capital Tacos locations in the Boulder and Longmont areas starting early next year.",
      url: "https://www.dailycamera.com/2022/10/18/capital-tacos-to-bring-three-tex-mex-restaurants-to-boulder-area/",
      source: "dailycamera",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:45:00+00:00",
    },
    {
      author: "Bill Plunkett",
      title:
        "Dodgers’ Andrew Friedman says NLDS loss was ‘an organizational failure in the postseason’",
      description:
        "Friedman acknowledges that this is “probably” the most disappointing outcome in the Dodgers’ recent history but gave no indication that change would be coming in response to that failure.",
      url: "https://www.pressenterprise.com/2022/10/18/dodgers-andrew-friedman-says-nlds-loss-was-an-organizational-failure-in-the-postseason/",
      source: "pe",
      image:
        "https://www.pressenterprise.com/wp-content/uploads/2022/10/LDN-L-DODGERS-1019-DC-5.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:45:16+00:00",
    },
    {
      author: null,
      title: "Person found dead on hiking trail near Torrey Pines Golf Course",
      description:
        "The body was recovered near North Torrey Pines Road and Torrey Pines Park Road, San Diego Fire-Rescue officials said",
      url: "https://www.sandiegouniontribune.com/news/public-safety/story/2022-10-18/person-found-dead-on-hiking-trail-near-torrey-pines-golf-course",
      source: "signonsandiego",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:41:33+00:00",
    },
    {
      author: "Bill Plunkett",
      title:
        "Dodgers’ Andrew Friedman says NLDS loss was ‘an organizational failure in the postseason’",
      description:
        "Friedman acknowledges that this is “probably” the most disappointing outcome in the Dodgers’ recent history but gave no indication that change would be coming in response to that failure.",
      url: "https://www.dailynews.com/2022/10/18/dodgers-andrew-friedman-says-nlds-loss-was-an-organizational-failure-in-the-postseason/",
      source: "dailynews",
      image:
        "https://www.dailynews.com/wp-content/uploads/2022/10/LDN-L-DODGERS-1019-DC-5.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:45:16+00:00",
    },
    {
      author: "Renato Marques, MDT",
      title:
        "Lawmaker calls for some Covid-19 measures to be dropped so ‘normal life’ can resume",
      description:
        "Lawmaker Lam Lon Wai has expressed his disagreement with some of the measures in force that aim to prevent and control Covid-19. During the period before the agenda of Monday’s plenary session at the Legislative Assembly, the lawmaker opined that local authorities are being sluggish in adapting preventive measures to the practical situation of the [&#8230;]The post Lawmaker calls for some Covid-19 measures to be dropped so ‘normal life’ can resume appeared first on MACAU DAILY TIMES 澳門每日時報.",
      url: "https://macaudailytimes.com.mo/lawmaker-calls-for-some-covid-19-measures-to-be-dropped-so-normal-life-can-resume.html?utm_source=rss&utm_medium=rss&utm_campaign=lawmaker-calls-for-some-covid-19-measures-to-be-dropped-so-normal-life-can-resume",
      source: "macaudailytimes",
      image: null,
      category: "general",
      language: "en",
      country: "mo",
      published_at: "2022-10-19T00:42:49+00:00",
    },
    {
      author: "Michaela Whitbourn",
      title:
        "Former senator who harassed staff awarded $250,000 in defamation case",
      description:
        "Former senator Brian Burston sexually harassed female staff members but One Nation leader Pauline Hanson must pay him $250,000 in damages, a court has ruled.",
      url: "https://www.brisbanetimes.com.au/politics/federal/former-senator-who-harassed-staff-awarded-250-000-in-defamation-case-20221019-p5bqy6.html?ref=rss&utm_medium=rss&utm_source=rss_feed",
      source: "Brisbane Times",
      image:
        "https://static.ffx.io/images/$zoom_0.4400366195649214%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_452%2C$y_93/t_crop_custom/q_86%2Cf_jpg/ee36ac3cf6da272f35c231b2a136d9949a1641aa",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-19T00:42:53+00:00",
    },
    {
      author: "Latika Bourke",
      title:
        "British MP says senior Chinese diplomat involved in attack on Hong Kong protestor",
      description:
        "A British MP says one of the most senior Chinese diplomats in the UK was involved in the violent scenes at the consulate in Manchester.",
      url: "https://www.watoday.com.au/world/europe/british-mp-says-senior-chinese-diplomat-involved-in-attack-on-hong-kong-protestor-20221019-p5bqw2.html?ref=rss&utm_medium=rss&utm_source=rss_world",
      source: "watoday",
      image:
        "https://static.ffx.io/images/$zoom_0.6877%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_2029%2C$y_29/t_crop_custom/q_86%2Cf_auto/c065f94aac4601197d261ac182a8132e6811dcc3",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-19T00:43:20+00:00",
    },
    {
      author: "The Associated Press",
      title: "Colts owner Irsay says there’s “merit to remove” Snyder",
      description:
        "NEW YORK (AP) &#8212; Colts owner Jim Irsay says there&#8217;s &#8220;merit to remove&#8221; Dan Snyder as owner of the Washington Commanders, making him the first NFL owner to publicly state that his controversial counterpart should go.",
      url: "https://www.denverpost.com/2022/10/18/colts-owner-irsay-says-theres-merit-to-remove-snyder/",
      source: "The Denver Post",
      image:
        "https://www.denverpost.com/wp-content/uploads/2022/10/Commanders_Snyder_Football_28244-10.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:42:50+00:00",
    },
    {
      author: "Dave DeCamp",
      title:
        "Blinken Claims China Wants to Take Taiwan On a ‘Much Faster Timeline’",
      description:
        'Secretary of State Antony Blinken on Tuesday claimed that China is looking to take Taiwan &#8220;on a much faster timeline&#8221; and accused Beijing of wanting to change the status quo across the Taiwan Strait. Blinken didn&#8217;t provide evidence for the claim but insisted that there&#8217;s &#8220;been a change in the approach from Beijing toward Taiwan &#8230; Continue reading "Blinken Claims China Wants to Take Taiwan On a &#8216;Much Faster Timeline&#8217;"The post Blinken Claims China Wants to Take Taiwan On a &#8216;Much Faster Timeline&#8217; appeared first on News From Antiwar.com.',
      url: "https://news.antiwar.com/2022/10/18/blinken-claims-china-wants-to-take-taiwan-on-a-much-faster-timeline/",
      source: "antiwar",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:45:33+00:00",
    },
    {
      author: "Bill Plunkett",
      title:
        "Dodgers’ Andrew Friedman says NLDS loss was ‘an organizational failure in the postseason’",
      description:
        "Friedman acknowledges that this is “probably” the most disappointing outcome in the Dodgers’ recent history but gave no indication that change would be coming in response to that failure.",
      url: "https://www.presstelegram.com/2022/10/18/dodgers-andrew-friedman-says-nlds-loss-was-an-organizational-failure-in-the-postseason/",
      source: "presstelegram",
      image:
        "https://www.presstelegram.com/wp-content/uploads/2022/10/LDN-L-DODGERS-1019-DC-5.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:45:16+00:00",
    },
    {
      author: "Ben Cost",
      title:
        "‘Unlucky’ rower vomiting 40 times per day after capsizing boat in dirty river",
      description:
        'She was in purge-atory. A UK girl claims that capsizing her boat in "dirty" water has afflicted her with a condition that makes her unable to eat without throwing up.',
      url: "https://nypost.com/2022/10/18/unlucky-rower-vomiting-40-times-per-day-after-capsizing-boat-in-dirty-river/",
      source: "Post",
      image:
        "https://nypost.com/wp-content/uploads/sites/2/2022/10/river-dirty.jpg?quality=90&strip=all",
      category: "general",
      language: "en",
      country: "zm",
      published_at: "2022-10-19T00:42:45+00:00",
    },
    {
      author: "Gold Editor",
      title:
        "Gold Price Forecast: XAU/USD fades bounce off $1,640 support amid hawkish Fedspeak",
      description:
        "US Treasury yields remain indecisive at multi-month high amid light calendar. Risk appetite remains firmer despite hawkish Fedspeak but XAU/USD buyers fear amid DXY’s hesitant fall. Gold price &#8230; Read Full Story at source (may require registration)The post Gold Price Forecast: XAU/USD fades bounce off $1,640 support amid hawkish Fedspeak appeared first on ForexTV.",
      url: "https://forextv.com/xauusd-gold-us-dollar/gold-price-forecast-xau-usd-fades-bounce-off-1640-support-amid-hawkish-fedspeak/",
      source: "forextv",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:01:38+00:00",
    },
    {
      author: "JPY Editor",
      title:
        "USD/JPY awaits Japan intervention around 30-year high above 149.00, yields stay sluggish",
      description:
        "Market sentiment remains positive but signals of Japan meddling to defend yen probe the pair buyers. Inactive yields also tests buyers despite hawkish Fedspeak, mixed US data. USD/JPY treads water &#8230; Read Full Story at source (may require registration)The post USD/JPY awaits Japan intervention around 30-year high above 149.00, yields stay sluggish appeared first on ForexTV.",
      url: "https://forextv.com/jpy-japanese-yen/usd-jpy-awaits-japan-intervention-around-30-year-high-above-149-00-yields-stay-sluggish/",
      source: "forextv",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:01:28+00:00",
    },
    {
      author: "Spc. Christopher Cameron",
      title: "M4 Range DAY [Image 1 of 9]",
      description:
        "Soldiers and Katusa's conduct an M4 range on Camp Yongsan-Casey, September 9th 2022.The M4 carbine is a 5.56×45mm NATO, gas-operated,[b] magazine-fed, carbine developed in the United States during the 1980s. It is a shortened version of the M16A2 assault rifle. (U.S. ARMY photo by SPC. Chris Cameron )",
      url: "https://www.dvidshub.net/image/7469718/m4-range-day",
      source: "dvidshub",
      image:
        "https://cdn.dvidshub.net/media/thumbs/photos/2210/7469718/250x167_q75.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:03:36+00:00",
    },
    {
      author: "DNA Web Team",
      title:
        "Firm favourite Mallikarjun Kharge or hopeful Shashi Tharoor? Congress gets first non-Gandhi president in 24 years today",
      description:
        "Mallikarjun Kharge, who is said to be the unofficial official candidate of the party, is seen as a firm favourite against Shashi Tharoor.",
      url: "https://www.dnaindia.com/india/report-firm-favourite-mallikarjun-kharge-or-hopeful-shashi-tharoor-congress-gets-first-non-gandhi-president-in-24-years-today-2993966",
      source: "dnaindia",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/third/public/2022/10/19/2547389-tharoor-kharge.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:01:53+00:00",
    },
    {
      author: "David Richards",
      title: "EXCLUSIVE: New Milo Coms Device Close To Shipping After Delays",
      description:
        "A brand new way to communicate is about to be launched in Australia, out is walkie talkies and mobiles, in is Milo an award winning communication device that allows skiers bikers and surfers, to talk to one another with a waterproof device that attaches easily to clothing, it&#8217;s also described as ideal for the construction... Read More",
      url: "https://www.channelnews.com.au/exclusive-new-milo-coms-device-close-to-shipping-after-delays/",
      source: "channelnews",
      image: null,
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-19T01:00:59+00:00",
    },
    {
      author: "",
      title: "Dib confronts Fleming after win",
      description:
        "Billel Dib and Paul Fleming traded verbal barbs after Fleming's win over Jackson England.",
      url: "https://www.brisbanetimes.com.au/sport/dib-confronts-fleming-after-win-20221019-p5br1t.html?ref=rss&utm_medium=rss&utm_source=rss_feed",
      source: "Brisbane Times",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/0ca8e29ee07082afda37518d228dfefc6272d917",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-19T01:03:49+00:00",
    },
    {
      author: "Phil Pirrello",
      title: "Black Adam has a few bright spots, and a whole lot of punching",
      description:
        "For a movie Dwayne Johnson vigorously hyped as the catalyst for change in the “hierarchy of the DCU,” Black Adam unfortunately resembles large chunks of what came before: A brooding, weightless CG punch-a-thon, shot with the same grimy visual style of previous Snyderverse entries in the DCEU. A movie full of…Read more...",
      url: "https://www.avclub.com/black-adam-review-dwayne-johnson-pierce-brosnan-1849674142",
      source: "avclub",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:02:00+00:00",
    },
    {
      author: null,
      title:
        "EDEN CONFIDENTIAL: Ad tycoon Sir Martin Sorrell splits from his literary love ",
      description:
        "RICHARD EDEN: Caroline Michel once said advertising tycoon Sir Martin Sorrell had given her some of the best career advice she'd had: 'Impossible is nothing, nothing is impossible.'",
      url: "https://www.dailymail.co.uk/tvshowbiz/article-11329419/EDEN-CONFIDENTIAL-Ad-tycoon-Sir-Martin-Sorrell-splits-literary-love.html?ns_mchannel=rss&ito=1490&ns_campaign=1490",
      source: "dailymail",
      image:
        "https://i.dailymail.co.uk/1s/2022/10/19/02/63610883-0-image-a-70_1666141282417.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:01:25+00:00",
    },
    {
      author: null,
      title:
        "EDEN CONFIDENTIAL: Ad tycoon Sir Martin Sorrell splits from his literary love ",
      description:
        "RICHARD EDEN: Caroline Michel once said advertising tycoon Sir Martin Sorrell had given her some of the best career advice she'd had: 'Impossible is nothing, nothing is impossible.'",
      url: "https://www.dailymail.co.uk/tvshowbiz/article-11329419/EDEN-CONFIDENTIAL-Ad-tycoon-Sir-Martin-Sorrell-splits-literary-love.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
      source: "dailymail",
      image:
        "https://i.dailymail.co.uk/1s/2022/10/19/02/63610883-0-image-a-70_1666141282417.jpg",
      category: "general",
      language: "en",
      country: "uk",
      published_at: "2022-10-19T01:01:25+00:00",
    },
    {
      author: "Pfc. Haniel Pineda",
      title: "Camp Casey GAFPB Day 1",
      description:
        "U.S. Army and Air Force service members participate in the German Armed Forces Proficiency Badge (GAFPB) physical fitness test on Camp Casey, South Korea, Aug. 4, 2022. They performed a number of physical proficiency tests over the course of two days in order to earn the badge. (U.S. Army photo by Pfc. Haniel Pineda)",
      url: "https://www.dvidshub.net/image/7469731/camp-casey-gafpb-day-1",
      source: "dvidshub",
      image:
        "https://cdn.dvidshub.net/media/thumbs/photos/2209/7469731/250x166_q75.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:42:31+00:00",
    },
    {
      author: "khyonhap",
      title: "GM Korea targets turnaround in 2023 with focus on exports",
      description:
        'CHANGWON -- General Motors Co. said Wednesday it is targeting to transform its South Korean operations into a "profitable and sustainable business" next year by increasing exports of next-generation vehicles. GM Korea Co. reported net losses for eight consecutive years through 2021 and expects losses to narrow further this year. To help achieve a turnaround, GM Korea plans to produce a next-generation crossover utility vehicle (CUV) model in its Changwon plant, about 300 kilometers sou',
      url: "https://www.koreaherald.com/view.php?ud=20221019000267",
      source: "koreaherald",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:45:07+00:00",
    },
    {
      author: "Vivian Michael",
      title:
        "Shoppers feeling the pinch as latest food price index shows more sharp rises",
      description:
        "By Makeida Antonio makeida.antonio@antiguaobserver.com “Ridiculous” and “expensive” were some of the terms shoppers used to describe rising prices on supermarket shelves yesterday. This as Antigua and Barbuda and countries around the world grapple with high rates of inflation. Inflation is the increase in the price of something over time. For example, if a certain item [&#8230;]",
      url: "https://antiguaobserver.com/shoppers-feeling-the-pinch-as-latest-food-price-index-shows-more-sharp-rises/",
      source: "antiguaobserver",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:44:55+00:00",
    },
    {
      author: "Chris Klepach, Opinions Contributor",
      title: "Opinion | Recreational marijuana is the future",
      description:
        "Individuals with a federal charge for marijuana possession are no longer criminals. President Joe Biden declared a pardon on Oct. 6 for thousands of individuals with a “simple marijuana possession.” Any other crimes that relate to marijuana are excluded. Iowa should follow this example of clemency by decriminalizing recreational marijuana. Decriminalizing marijuana will create more...The post Opinion | Recreational marijuana is the future appeared first on The Daily Iowan.",
      url: "https://dailyiowan.com/2022/10/18/opinion-recreational-marijuana-is-the-future/",
      source: "dailyiowan",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:42:15+00:00",
    },
    {
      author: "Vivian Michael",
      title:
        "Benjamin Says Myriad Issues Affected Volleyball Team In ECVA Tournament",
      description:
        "By Neto Baptiste The coach of the senior women’s national volleyball team, Fitzroy Benjamin, has blamed a myriad of issues for the team’s “under performance” in the just ended Eastern Caribbean Volleyball Association (ECVA) Senior Women’s tournament. Speaking on the Good Morning Jojo sports show, Benjamin said that the inexperience of some was a major [&#8230;]",
      url: "https://antiguaobserver.com/benjamin-says-myriad-issues-affected-volleyball-team-in-ecva-tournament/",
      source: "antiguaobserver",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:40:06+00:00",
    },
    {
      author: "Vanessa Perez",
      title:
        "SPD stresses safety tips for pedestrians, drivers as sun sets earlier",
      description:
        "Officers say were told by some witnesses they saw the teen suddenly go into the street. SPD says it didn't seem like the driver was impaired at the time.",
      url: "https://www.kxly.com/spd-stresses-safety-tips-for-pedestrians-drivers-as-sun-sets-earlier/",
      source: "kxly",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:42:21+00:00",
    },
    {
      author: "Jason Ounpraseuth",
      title:
        "Phillies’ Kyle Schwarber Breaks Home Run Drought With Massive Dinger",
      description:
        "Kyle Schwarber had not hit a home run in the 2022 Major League Baseball postseason prior to Game 1 of the National League Championship Series, but when he did Tuesday night, the left fielder made sure to make it a memorable one. Schwarber was struggling in the postseason. He was batting 1-for-20 with two RBIs [&#8230;]The post Phillies&#8217; Kyle Schwarber Breaks Home Run Drought With Massive Dinger appeared first on NESN.com.",
      url: "https://nesn.com/2022/10/phillies-kyle-schwarber-breaks-home-run-drought-with-massive-dinger/",
      source: "nesn",
      image:
        "https://nesn.com/wp-content/uploads/sites/5/2022/10/kyle-schwarber-1.jpg",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T02:09:26+00:00",
    },
    {
      author: "Industry News",
      title:
        "Calix launches Arlo Security to strengthen security for homes and small businesses",
      description:
        "Calix announced Arlo Security, a fully managed home protection service, so broadband service providers (BSPs) can continue to differentiate in competitive markets and extend their trusted brand. Arlo Security is the 10th addition to the growing list of Calix Revenue EDGE managed services. It builds on top of Arlo Secure connected cameras to include a keypad/hub and all-in-one sensors to detect motion, water leaks, smoke, carbon monoxide, temperature, and light. Arlo Security pairs this top-tier &#8230; More &#8594;The post Calix launches Arlo Security to strengthen security for homes and small...",
      url: "https://www.helpnetsecurity.com/2022/10/19/calix-arlo-security/",
      source: "net-security",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T02:10:36+00:00",
    },
    {
      author: "Curtis Pashelka",
      title:
        "Familiar script plays out for San Jose Sharks in record-setting loss",
      description:
        "San Jose Sharks allow three goals in just over nine minutes in another troublesome second period in 5-2 loss to New York Islanders at UBS Arena",
      url: "https://www.dailydemocrat.com/2022/10/18/familiar-script-plays-out-for-san-jose-sharks-in-record-setting-loss/",
      source: "dailydemocrat",
      image:
        "https://www.dailydemocrat.com/wp-content/uploads/2022/10/BNG-L-SHARKS-1019-1.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T02:10:02+00:00",
    },
    {
      author: "",
      title: "Tensions flare in NBA season opener",
      description:
        "Boston's Marcus Smart and Philadelphia's Joel Embiid got into it as the Celtics and 76ers kicked off the 2022-23 NBA season",
      url: "https://www.smh.com.au/sport/basketball/tensions-flare-in-nba-season-opener-20221019-p5br2x.html?ref=rss&utm_medium=rss&utm_source=rss_feed",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/46182e87b2f8533603fafa0cdef11e12afedac49",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-19T02:14:15+00:00",
    },
    {
      author: "Matthewprigge",
      title:
        "People Loved Watching Marco Rubio Have His Ass Repeatedly Handed To Him By Senate Opponent Val Demings During Their Debate",
      description:
        "Twitter / @QondiNtini The incumbent Florida senator is ahead in the polls, but his opponent gave him hell during their first and only debate.",
      url: "https://uproxx.com/viral/marco-rubio-val-demings-debate-twitter-reactions/",
      source: "hitfix",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T02:14:41+00:00",
    },
    {
      author: "David Carrigg",
      title: "Metro Vancouver air quality advisory extended",
      description:
        "Fires near Chilliwack, Hope, Harrison Lake and in Washington leading to smoky air trapped by stagnant weather",
      url: "https://vancouversun.com/news/local-news/metro-vancouver-air-quality-advisory-extended",
      source: "vancouversun",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T02:10:53+00:00",
    },
    {
      author: null,
      title: "Russia war commander admits Kherson situation ‘very difficult’",
      description:
        "Russian forces have been driven back by an ongoing Ukrainian offensive and are at risk of being trapped.",
      url: "https://www.aljazeera.com/news/2022/10/19/russia-war-commander-admits-kherson-situation-very-difficult",
      source: "Al Jazeera English",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T02:11:14+00:00",
    },
    {
      author: "Euan Ward and John Yoon",
      title: "A climb without a hijab sparks fears for Iranian athlete",
      description:
        "As video of Elnaz Rekabi’s climb circulated on social media, so did concern about her fate on her return to Tehran, Iran, with some reports saying she was missing for at least a day.",
      url: "https://www.brisbanetimes.com.au/sport/a-climb-without-a-hijab-sparks-fears-for-iranian-athlete-20221019-p5br28.html?ref=rss&utm_medium=rss&utm_source=rss_feed",
      source: "Brisbane Times",
      image:
        "https://static.ffx.io/images/$zoom_0.1243%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_105/t_crop_custom/q_86%2Cf_jpg/02244014bee04cf751a96fb77635e515c08ec983",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-19T02:34:10+00:00",
    },
    {
      author: "Bianca Hall",
      title: "Echuca braces for twin threats of heavy rains and rising river",
      description:
        "Echuca residents have been told predicted rain, forecast to hit as the Murray River peaks, poses the risk of “drowning ourselves from the inside”.",
      url: "https://www.brisbanetimes.com.au/national/victoria/echuca-braces-for-twin-threats-of-heavy-rains-and-rising-river-20221019-p5br1p.html?ref=rss&utm_medium=rss&utm_source=rss_feed",
      source: "Brisbane Times",
      image:
        "https://static.ffx.io/images/$zoom_0.2645%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_1/t_crop_custom/q_86%2Cf_jpg/a64b39ba7d354970c4868e556fee0a7f2c6bdd34",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-19T02:33:41+00:00",
    },
    {
      author: "Yasmina Sahir, Opinions Columnist",
      title: "SWANA students want to feel heard at the UI",
      description:
        "Middle Eastern, Southwest Asian, North African, and Arab (SWANA or MENA) University of Iowa students — like myself — are wondering when the alienation, targeting of our community, and connotation with violence will end at the university.My academic year started with one instance that told me anti-SWANA and Islamophobic ideology remain unchallenged on campus in 2022.After an afternoon class, one student approached me and questioned my status as a second-generation Moroccan American. From here, the conversation quickly took a direction I am used to in Iowa.“With my Christian mission group...",
      url: "https://dailyiowan.com/2022/10/18/southwest-asian-and-northern-african-students-want-to-feel-heard-at-the-university-of-iowa/",
      source: "dailyiowan",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T02:40:09+00:00",
    },
    {
      author: "Euan Ward and John Yoon",
      title: "A climb without a hijab sparks fears for Iranian athlete",
      description:
        "As video of Elnaz Rekabi’s climb circulated on social media, so did concern about her fate on her return to Tehran, Iran, with some reports saying she was missing for at least a day.",
      url: "https://www.watoday.com.au/sport/a-climb-without-a-hijab-sparks-fears-for-iranian-athlete-20221019-p5br28.html?ref=rss&utm_medium=rss&utm_source=rss_feed",
      source: "watoday",
      image:
        "https://static.ffx.io/images/$zoom_0.1243%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_105/t_crop_custom/q_86%2Cf_jpg/02244014bee04cf751a96fb77635e515c08ec983",
      category: "general",
      language: "en",
      country: "au",
      published_at: "2022-10-19T02:34:10+00:00",
    },
    {
      author: "Madeline Kenney",
      title:
        "Warriors celebrate 2022 title one last time with rings, banner unveiling ahead of season opener",
      description:
        "Tuesday was the official closing of a championship season, but Curry is eying ring No. 5 this season.",
      url: "https://www.thereporter.com/2022/10/18/warriors-celebrate-2022-title-one-last-time-with-rings-banner-unveiling-ahead-of-season-opener/",
      source: "thereporter",
      image:
        "https://www.thereporter.com/wp-content/uploads/2022/10/BNG-L-WARRIORS-1019-7.jpg?w=1400px&strip=all",
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T02:39:25+00:00",
    },
    {
      author: "CNN Newssource",
      title:
        "Netflix is back to growing after a nightmare year of losing subscribers",
      description:
        "By Frank Pallotta, CNN Business After two quarters of bleeding subscribers, Netflix appears to be back on track — in a big way. The streaming company reported Tuesday that it notched 2.4 million subscribers in the third quarter of 2022 — a number that far exceeded expectations of 1 million subscribers. In more good news,The post Netflix is back to growing after a nightmare year of losing subscribers appeared first on KRDO.",
      url: "https://krdo.com/money/cnn-business-consumer/2022/10/18/netflix-is-back-to-growing-after-a-nightmare-year-of-losing-subscribers/",
      source: "krdo",
      image: null,
      category: "general",
      language: "en",
      country: "us",
      published_at: "2022-10-19T02:34:43+00:00",
    },
  ],
};

export const business = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 100,
    total: 10000,
  },
  data: [
    {
      author: "Reuters",
      title:
        "U.S. stocks extend rally, Treasury yields dip after solid earnings, economic data",
      description:
        "U.S. stocks extend rally, Treasury yields dip after solid earnings, economic data",
      url: "https://www.investing.com/news/economy/asia-stocks-rise-as-relief-rally-builds-after-uk-uturn-2914265",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/trkd-images/LYNXMPEI9H026_L.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:47:45+00:00",
    },
    {
      author: "Reuters",
      title:
        "U.S. approves Delta, United bids to delay restart of Havana flights",
      description:
        "U.S. approves Delta, United bids to delay restart of Havana flights",
      url: "https://www.investing.com/news/stock-market-news/us-approves-delta-united-bids-to-delay-restart-of-havana-flights-2915388",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/trkd-images/LYNXMPEI9H0YG_L.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-18T22:46:57+00:00",
    },
    {
      author: "James Kwen",
      title: "INEC warns political parties not to make insecurity worse",
      description:
        "The Independent National Electoral Commission (INEC) has warned political parties, their candidates and supporters not to complicate the security situation of the country. INEC expressed worry that, even as it is working hard to ensure a credible process in the forthcoming elections, there are reports of clashes among parties and their supporters in some states [&#8230;]read more INEC warns political parties not to make insecurity worse",
      url: "https://businessday.ng/politics/article/inec-warns-political-parties-not-to-make-insecurity-worse/",
      source: "Businessday | News You Can Trust",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:02:06+00:00",
    },
    {
      author: "James Kwen",
      title:
        "Protest rocks APC headquarters as members demand removal of FCT chairman",
      description:
        "Protesters, numbering about 100 on Tuesday besieged the National Secretariat of the All Progressives Congress (APC), located along Blantyre street, Wuse 2, Abuja, demanding the immediate removal of Abdulmalik Usman, the Federal Capital Territory (FCT) chapter chairman of the party. The protesters, believed to be members of APC, insisted that the FCT congress conducted in [&#8230;]read more Protest rocks APC headquarters as members demand removal of FCT chairman",
      url: "https://businessday.ng/news/article/protest-rocks-apc-headquarters-as-members-demand-removal-of-fct-chairman/",
      source: "Businessday | News You Can Trust",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:41:05+00:00",
    },
    {
      author: null,
      title: "Crude oil prices rise on supply woes; Brent hits $90.76/bbl",
      description:
        "Brent crude futures LCOc1 rose 73 cents, or 0.8%, to $90.76 a barrel by 0100 GMT. US West Texas Intermediate crude CLc1 was at $83.95 a barrel, up $1.13, or 1.4%. WTI's front-month contract expires on Thursday.",
      url: "https://www.businesstoday.in/commodities/story/crude-oil-prices-rise-on-supply-woes-brent-hits-9076bbl-350235-2022-10-19?utm_source=rssfeed",
      source: "Business Today | Latest Stock Market And Economy News India",
      image: null,
      category: "business",
      language: "en",
      country: "in",
      published_at: "2022-10-19T02:11:30+00:00",
    },
    {
      author: "zee business",
      title:
        "US Stock Market extends rally: Dow Jones jumps 300 points amid upbeat earnings, Nasdaq gains around 1%",
      description:
        "Better-than-expected quarterly results from Goldman Sachs Group Inc (GS.N), Johnson & Johnson (JNJ.N) and Lockheed Martin (LMT.N) set the tone, with robust industrial output data.",
      url: "https://www.zeebiz.com/markets/global-markets/news-us-stock-market-extends-rally-dow-jones-jumps-300-points-amid-upbeat-earnings-nasdaq-gains-around-1-203847",
      source: "Zee Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T02:35:33+00:00",
    },
    {
      author: "Steve Georgopoulos",
      title: "Test do not use V2 SG test for publishing",
      description: "woff",
      url: "https://www.theage.com.au/business/companies/test-do-not-use-v2-sg-test-for-publishing-20221019-p5br3y.html?ref=rss&utm_medium=rss&utm_source=rss_business",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.201%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_95/t_crop_custom/q_86%2Cf_jpg/90702239c02b05bb9d65979f5064539871b8abf3",
      category: "business",
      language: "en",
      country: "au",
      published_at: "2022-10-19T03:47:33+00:00",
    },
    {
      author: "Reuters",
      title:
        "‘Massive gaps’ seen in countries’ plans to tackle climate change -study",
      description:
        "WASHINGTON &#8212; The latest pledges by countries to tackle global warming under the Paris Agreement are &#8220;woefully inadequate&#8221; to avert a rise in global temperatures that scientists say will worsen droughts, storms and floods, a report said on Wednesday. The 2015 pact launched at a U.N. global climate summit requires 194 countries to detail their [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/massive-gaps-seen-in-countries-plans-to-tackle-climate-change-study",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T04:01:37+00:00",
    },
    {
      author: "Kelvin Okojie",
      title: "Five things to know to start your Wednesday",
      description:
        "El-Rufai presents 2023 draft budget of N370bn to Assembly, education takes 45% Gov. Nasir El Rufai of Kaduna State on Tuesday presented the 2023 draft budget of N370 billion to the State House of Assembly. The estimates conform with his administration’s 60:40 ratio of capital to recurrent expenditure. It is the eighth and final budget [&#8230;]read more Five things to know to start your Wednesday",
      url: "https://businessday.ng/news/article/five-things-to-know-to-start-your-wednesday-27/",
      source: "Businessday | News You Can Trust",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T03:57:13+00:00",
    },
    {
      author: null,
      title:
        "Axis Bank Q2 preview: Profit may rise over 40% YoY on low provisions",
      description:
        "Analysts said progress of the Citi portfolio, direction of operating profit growth, and credit growth amid slowdown concerns will be tracked by investors",
      url: "https://www.business-standard.com/article/markets/axis-bank-q2-preview-profit-may-rise-over-40-yoy-on-low-provisions-122101900228_1.html",
      source: "Business Standard",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T04:31:46+00:00",
    },
    {
      author: "Axis Securities",
      title:
        "L&T Tech Q2 Review - Strong Result; Execution Prowess To Retain Growth Momentum: Axis Securities",
      description:
        "L&T Tech Q2 Review - Strong Result; Execution Prowess To Retain Growth Momentum: Axis Securities",
      url: "https://www.bqprime.com/research-reports/lt-tech-q2-review-strong-result-execution-prowess-to-retain-growth-momentum-axis-securities",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T05:56:58+00:00",
    },
    {
      author: "Vaishali Sood",
      title:
        "Gambia Children Death Case: What Ails India's Drug Regulatory System",
      description:
        "Gambia Children Death Case: What Ails India's Drug Regulatory System",
      url: "https://www.bqprime.com/business/gambia-children-death-case-what-ails-indias-drug-regulatory-system",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T06:11:37+00:00",
    },
    {
      author: "Reuters",
      title:
        "Taiwan c.bank governor: Monetary policy affected by U.S., Europe tightening",
      description:
        "TAIPEI &#8212; Taiwan central bank governor Yang Chin-long said on Wednesday that monetary policies in small and open economies like Taiwan are prone to be affected by the tightening in the United States and Europe. Facing a number of uncertainties, the central bank will make prudent decisions based on real-time data, Yang said in a [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/taiwan-c-bank-governor-monetary-policy-affected-by-u-s-europe-tightening",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T06:12:10+00:00",
    },
    {
      author: "Reuters",
      title:
        "Spain’s Enagas considers asset sales to fund new gas pipelines – Bloomberg",
      description:
        "MADRID &#8212; Spanish gas pipeline operator Enagas is considering selling assets to fund new European infrastructure needed as the region seeks to cut dependence on Russian gas, Bloomberg reported on Wednesday, citing its CEO Gonzalo Arturo Aizpiri. Enagas may eventually sell its 30% stake in U.S.-based Tallgrass Energy, Arturo Aizpiri said, according to Bloomberg. The [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/spains-enagas-considers-asset-sales-to-fund-new-gas-pipelines-bloomberg",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T06:36:42+00:00",
    },
    {
      author: "zee business",
      title:
        "Vande Bharat Express: Enjoy luxury ride from Delhi to Chandigarh in 3 hours; check timings",
      description:
        "Delhi To Chandigarh Vande Bharat Express: The train was flagged off by Prime Minister Narendra Modi during his Himachal Pradesh visit on October 13.",
      url: "https://www.zeebiz.com/indian-railways/news-vande-bharat-express-enjoy-luxury-ride-from-delhi-to-chandigarh-in-3-hours-check-timings-203900",
      source: "Zee Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T06:43:59+00:00",
    },
    {
      author: "Business Matters",
      title:
        "Amazon set to enter insurance comparison marketplace with new Amazon Insurance Store",
      description:
        "Meerkats beware: Amazon is trying to hunt you down. The online retailer is entering the home insurance price comparison market, hoping to succeed where Google failed.Read more: Amazon set to enter insurance comparison marketplace with new Amazon Insurance Store",
      url: "https://bmmagazine.co.uk/news/amazon-set-to-enter-insurance-comparison-marketplace-with-new-amazon-insurance-store/",
      source: "Business Matters | The Uk's Leading Sme Business Magazine",
      image: null,
      category: "business",
      language: "en",
      country: "gb",
      published_at: "2022-10-19T07:56:49+00:00",
    },
    {
      author: "Reuters",
      title: "European shares reverse gains as investors focus on inflation",
      description:
        "European shares reverse gains as investors focus on inflation",
      url: "https://www.investing.com/news/stock-market-news/european-shares-inch-higher-as-asmls-results-lift-chip-stocks-2915597",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/trkd-images/LYNXMPEI9I090_L.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T09:15:38+00:00",
    },
    {
      author: "Neil",
      title: "Coca-Cola Philippines to use recycled packaging by 2023",
      description: "",
      url: "https://www.bworldonline.com/sparkup/2022/10/19/481704/coca-cola-philippines-to-use-recycled-packaging-by-2023/",
      source: "Business World",
      image:
        "https://www.bworldonline.com/wp-content/uploads/2022/10/pexels-eduardo-soares-5497998-300x200.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T09:38:08+00:00",
    },
    {
      author: "Prabhudas Lilladher",
      title:
        "Can Fin Homes Q2 Results Review - Medium Term Story Intact: Prabhudas Lilladher",
      description:
        "Can Fin Homes Q2 Results Review - Medium Term Story Intact: Prabhudas Lilladher",
      url: "https://www.bqprime.com/research-reports/can-fin-homes-q2-results-review-medium-term-story-intact-prabhudas-lilladher",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T09:37:41+00:00",
    },
    {
      author: "Systematix Institutional Equities",
      title:
        "Nestle India Q3 Results Review - Strong Beat On Growth; Sector-Leading Prospects Merit Upgrade: Systematix",
      description:
        "Nestle India Q3 Results Review - Strong Beat On Growth; Sector-Leading Prospects Merit Upgrade: Systematix",
      url: "https://www.bqprime.com/research-reports/nestle-india-q3-results-review-strong-beat-on-growth-sector-leading-prospects-merit-upgrade-systematix",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T09:37:21+00:00",
    },
    {
      author: null,
      title: "Elevance Health declares $1.28 dividend",
      description: "Elevance Health declares $1.28 dividend",
      url: "https://seekingalpha.com/news/3892524-elevance-health-declares-128-dividend?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T10:06:19+00:00",
    },
    {
      author: "zee business",
      title:
        "Microsoft Corporation Layoff: IT giant fires nearly 1,000 staff; over 32,000 jobs cut by Big Tech firms till July, says report",
      description:
        "There are many technology companies, including Meta Platforms Inc, Twitter Inc, and Snap Inc, that have cut jobs this year. ",
      url: "https://www.zeebiz.com/jobs/news-microsoft-corporation-layoff-it-giant-fires-nearly-1000-staff-over-32000-jobs-cut-by-big-tech-firms-till-july-says-report-203934",
      source: "Zee Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T10:10:48+00:00",
    },
    {
      author: "GlobeNewswire",
      title:
        "Wallbridge Announces Voting Results from Special Meeting of Shareholders",
      description:
        "TORONTO, Oct. 19, 2022 (GLOBE NEWSWIRE) &#8212; Wallbridge Mining Company Limited (TSX:WM, OTCQX:WLBMF) (“Wallbridge” or the “Company”) today announced that 99.615% of shares represented by proxy at its Special Meeting of Shareholders (the “Meeting”) held on October 18, 2022 were voted in favour of the Stated Capital Reduction Resolution, as defined below; 0.385% were voted [&#8230;]",
      url: "https://financialpost.com/globe-newswire/wallbridge-announces-voting-results-from-special-meeting-of-shareholders",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T10:30:56+00:00",
    },
    {
      author: "Neil",
      title: "Warriors begin title defense with 14-point win over Lakers",
      description: "",
      url: "https://www.bworldonline.com/sports/2022/10/19/481743/warriors-begin-title-defense-with-14-point-win-over-lakers/",
      source: "Business World",
      image:
        "https://www.bworldonline.com/wp-content/uploads/2022/07/nba-logo-300x200.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T10:51:11+00:00",
    },
    {
      author: "zee business",
      title: "Sanjana Parmar is proving her mettle as a versatile producer",
      description:
        "Sanjana Parmar laid the foundation of House of Joy Productions and ventured into the entertainment world by launching Suraj Aur Saanjh on Voot, which was a web series.",
      url: "https://www.zeebiz.com/agencies/sanjana-parmar-is-proving-her-mettle-as-a-versatile-producer-203933",
      source: "Zee Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T10:50:35+00:00",
    },
    {
      author: "Pallavi Nahata",
      title:
        "Risk to India’s Sovereign Rating From External Pressures Is Limited, Says Fitch",
      description:
        "Risk to India’s Sovereign Rating From External Pressures Is Limited, Says Fitch",
      url: "https://www.bqprime.com/business/risk-to-indias-sovereign-rating-from-external-pressures-is-limited-says-fitch",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T10:48:06+00:00",
    },
    {
      author: null,
      title:
        "Taiwan Semiconductor considers expansion into Japan as geopolitical risk rises: report",
      description:
        "Taiwan Semiconductor considers expansion into Japan as geopolitical risk rises: report",
      url: "https://seekingalpha.com/news/3892586-taiwan-semiconductor-considers-expansion-into-japan-as-geopolitical-risk-rises-report?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T11:57:36+00:00",
    },
    {
      author: "Aishwarya Rajgopal",
      title:
        "Amazon Great Indian Festival 2022 To End Soon; Get Deals On Smartphones, Laptops And More!",
      description:
        "Amazon Great Indian Festival 2022 To End Soon; Get Deals On Smartphones, Laptops And More!",
      url: "https://www.bqprime.com/business/pfx-amazon-great-indian-festival-sale-2022",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T12:33:00+00:00",
    },
    {
      author: "Business Wire",
      title:
        "Québec Nickel Corp Drills Possible Extension of the Fortin Sill Zone at Depth",
      description:
        "Pyrrhotite + chalcopyrite mineralization similar to that seen in Fortin Sill Zone drilling VANCOUVER, British Columbia &#8212; Québec Nickel Corp. ( CSE: QNI; FSE: 7lB; OTCQB: QNICF) (“QNI” or the “Company”) is pleased to announce it has expanded the known sulphide mineralization at the Fortin Sill Zone, Ducros Project, located approximately 80 kilometres northeast of [&#8230;]",
      url: "https://financialpost.com/pmn/press-releases-pmn/business-wire-news-releases-pmn/quebec-nickel-corp-drills-possible-extension-of-the-fortin-sill-zone-at-depth",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T12:30:24+00:00",
    },
    {
      author: null,
      title:
        "Palantir, Hertz enter multi-year partnership for fleet management platform",
      description:
        "Palantir, Hertz enter multi-year partnership for fleet management platform",
      url: "https://seekingalpha.com/news/3892606-palantir-hertz-enter-multi-year-partnership-for-fleet-management-platform?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T12:32:27+00:00",
    },
    {
      author: null,
      title: "WeTrade Group to increase presence in the health market",
      description: "WeTrade Group to increase presence in the health market",
      url: "https://seekingalpha.com/news/3892605-wetrade-group-to-increase-presence-in-the-health-market?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T12:31:35+00:00",
    },
    {
      author: "Investing.com",
      title: "The Blackstone Group PT Lowered to $102 at UBS",
      description: "The Blackstone Group PT Lowered to $102 at UBS",
      url: "https://www.investing.com/news/pro/the-blackstone-group-pt-lowered-to-102-at-ubs-432SI-2916015",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/news/World_News_9_M_1440052127.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T12:37:12+00:00",
    },
    {
      author: "Investing.com",
      title: "Hamilton Lane Inc. PT Lowered to $68 at UBS",
      description: "Hamilton Lane Inc. PT Lowered to $68 at UBS",
      url: "https://www.investing.com/news/pro/hamilton-lane-inc-pt-lowered-to-68-at-ubs-432SI-2916014",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/news/World_News_9_M_1440052127.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T12:37:10+00:00",
    },
    {
      author: "Investing.com",
      title: "Blue Owl Capital PT Lowered to $13 at UBS",
      description: "Blue Owl Capital PT Lowered to $13 at UBS",
      url: "https://www.investing.com/news/pro/blue-owl-capital-pt-lowered-to-13-at-ubs-432SI-2916013",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image: "https://i-invdn-com.investing.com/news/news_pile_108x81.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T12:37:07+00:00",
    },
    {
      author: "Investing.com",
      title: "Truist Financial PT Lowered to $58 at UBS",
      description: "Truist Financial PT Lowered to $58 at UBS",
      url: "https://www.investing.com/news/pro/truist-financial-pt-lowered-to-58-at-ubs-432SI-2916012",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/news/international_newspapers_108x81.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T12:37:03+00:00",
    },
    {
      author: "Reuters",
      title:
        "Uber looks to boost digital ad revenue with new advertising division",
      description:
        "Uber Technologies Inc has launched a new advertising division as the ride-hailing firm looks to diversify its revenue sources through tie-ups with brands and marketers. With a reach of 122 million monthly active users globally, the company said on Wednesday it will sell ad space inside its ride-hailing and UberEats apps, along with in-vehicle digital [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/uber-looks-to-boost-digital-ad-revenue-with-new-advertising-division",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T13:02:09+00:00",
    },
    {
      author: "Business Wire",
      title:
        "Visa and Thunes Expand Visa Direct’s Reach to 1.5 Billion Digital Wallets",
      description:
        "Partner to launch a cross-border send-to-wallet capability for SMBs and consumers SAN FRANCISCO &#8212; Visa (NYSE: V) is partnering with Thunes to help individuals and small businesses move money internationally to 78 digital wallet providers, reaching 1.5 billion digital wallets across 44 countries and territories. This partnership will now expand Visa Direct’s reach to nearly [&#8230;]",
      url: "https://financialpost.com/pmn/press-releases-pmn/business-wire-news-releases-pmn/visa-and-thunes-expand-visa-directs-reach-to-1-5-billion-digital-wallets",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T13:00:33+00:00",
    },
    {
      author: "David Pitt, The Associated Press",
      title:
        "Joe Biden just wiped out $1.3 billion of debt for about 36,000 farmers. Thank his Inflation Reduction Act.",
      description:
        "The USDA gives loans to about 115,000 farmers who can't get commercial credit. Now it's forgiving those who are behind on loan payments or facing foreclosure.",
      url: "https://fortune.com/2022/10/19/joe-biden-wipes-out-1-billion-debt-36000-farmers-inflation-reduction-act/",
      source: "Fortune",
      image:
        "https://content.fortune.com/wp-content/uploads/2022/10/GettyImages-1432879903.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T13:01:32+00:00",
    },
    {
      author: "Investing.com",
      title: "Netflix PT Raised to $250 at Morgan Stanley",
      description: "Netflix PT Raised to $250 at Morgan Stanley",
      url: "https://www.investing.com/news/pro/netflix-pt-raised-to-250-at-morgan-stanley-432SI-2916097",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image: "https://i-invdn-com.investing.com/news/LYNXMPEC9G1B8_M.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T13:18:01+00:00",
    },
    {
      author: "Investing.com",
      title: "Barrick Gold PT Lowered to Cdn$33 at Stifel Canada",
      description: "Barrick Gold PT Lowered to Cdn$33 at Stifel Canada",
      url: "https://www.investing.com/news/pro/barrick-gold-pt-lowered-to-cdn33-at-stifel-canada-432SI-2916094",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image: "https://i-invdn-com.investing.com/news/news_six_pile_108x81.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T13:15:21+00:00",
    },
    {
      author: "REGIS ANUKWUOJI",
      title:
        "Enugu: Candidate laments poor state of infrastructure in senatorial district",
      description:
        "The All Progressives Congress (APC) Enugu West senatorial candidate, Nick Ezeh has released his manifesto Christened ‘Restoration Mandate 2023’ to a select group of journalists in Enugu. Ezeh said his vision was to improve on the economic development of Enugu West Senatorial Zone. He regretted that Enugu West zone was the most underdeveloped in the [&#8230;]read more Enugu: Candidate laments poor state of infrastructure in senatorial district",
      url: "https://businessday.ng/news/article/enugu-candidate-laments-poor-state-of-infrastructure-in-senatorial-district/",
      source: "Businessday | News You Can Trust",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T13:17:56+00:00",
    },
    {
      author: null,
      title:
        "United CEO: Hybrid work has made travel demand 'permanently higher'",
      description:
        "United CEO: Hybrid work has made travel demand 'permanently higher'",
      url: "https://seekingalpha.com/news/3892653-united-ceo-hybrid-work-has-made-travel-demand-permanently-higher?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T13:42:05+00:00",
    },
    {
      author: "zee business",
      title:
        "Rupee Vs Dollar: Will rupee see further lows and where is it headed? Experts decode",
      description:
        "Expert Anuj Gupta said that he did not read to much from today's lows, citing that the weakness was on account of higher demand for USD in the domestic market ahead of the long festive holidays",
      url: "https://www.zeebiz.com/markets/currency/news-rupee-vs-dollar-will-rupee-see-further-lows-and-where-is-it-headed-experts-decode-203970",
      source: "Zee Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T13:50:00+00:00",
    },
    {
      author: "Reuters",
      title: "Investor Elliott takes stake in Germany's Fresenius - source",
      description:
        "Investor Elliott takes stake in Germany's Fresenius - source",
      url: "https://www.investing.com/news/stock-market-news/investor-elliott-has-taken-stake-in-germanys-fresenius-bloomberg-2916030",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/trkd-images/LYNXMPEI9I0HB_L.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T14:16:24+00:00",
    },
    {
      author: null,
      title: "EIA inventory report - Crude inventory falls unexpectedly",
      description: "EIA inventory report - Crude inventory falls unexpectedly",
      url: "https://seekingalpha.com/news/3892688-eia-inventory-report?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T14:30:35+00:00",
    },
    {
      author: null,
      title:
        "Intutive Surgical gains 12% as Q3 results buoy da Vinci Surgical System maker",
      description:
        "Intutive Surgical gains 12% as Q3 results buoy da Vinci Surgical System maker",
      url: "https://seekingalpha.com/news/3892694-intutive-surgical-gains-12-as-q3-results-buoy-da-vinci-surgical-system-maker?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T14:53:35+00:00",
    },
    {
      author: "Modestus Anaesoronye",
      title:
        "Universal Insurance shareholders applaud performance amidst challenging business environment",
      description:
        "Shareholders of Universal Insurance Plc have applauded the insurer for its strong financial performance in 2021 despite the difficult operating environment. Speaking at the insurer’s 52nd Annual General Meeting (AGM) held in held in Lagos, Sunny Nwosu, former president of the Independent Shareholders Association of Nigeria (ISAN), expressed his appreciation to the board and management [&#8230;]read more Universal Insurance shareholders applaud performance amidst challenging business environment",
      url: "https://businessday.ng/insurance/article/universal-insurance-shareholders-applaud-performance-amidst-challenging-business-environment/",
      source: "Businessday | News You Can Trust",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T15:06:48+00:00",
    },
    {
      author: "Reuters",
      title: "U.S. awards $2.8 billion for EV battery, grid projects",
      description:
        "WASHINGTON &#8212; The Biden administration will announce on Wednesday it is awarding $2.8 billion in grants for projects to boost U.S. manufacturing of electric vehicle batteries and domestic mineral production, a White House official told Reuters. The White House is also launching an effort, dubbed the American Battery Material Initiative, to strengthen critical mineral supply [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/u-s-awards-2-8-billion-for-ev-battery-grid-projects-8",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T15:07:00+00:00",
    },
    {
      author: "Globes correspondent",
      title: "Google Cloud launches new Israel region",
      description:
        "The Israel region will deliver a comprehensive portfolio of Google Cloud products to private and public sector organizations locally, making it easier for customers to serve their own users faster, more reliably and securely.",
      url: "https://en.globes.co.il/en/article-1001427191#utm_source=RSS",
      source: "Globes English | Israel Business Arena",
      image:
        "https://res.cloudinary.com/globes/image/upload/t_desktop_article_content_header_800%2A392/v1666191927/direct/boaz_maoz_hpy5wb.jpg",
      category: "business",
      language: "en",
      country: "il",
      published_at: "2022-10-19T15:25:29+00:00",
    },
    {
      author: "Reuters",
      title: "JPMorgan-backed digital bank C6 to open Brazil branch network",
      description:
        "SÃO PAULO &#8212; Brazilian lender C6 Bank is set to open its first five brick-and-mortar branches in the country in the next few weeks, an executive has revealed, enhancing the competition between the JPMorgan-backed digital bank and large retail lenders for high income clients in Latin America&#8217;s largest economy. C6&#8217;s head of high income, Felipe [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/jpmorgan-backed-digital-bank-c6-to-open-brazil-branch-network",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T15:25:34+00:00",
    },
    {
      author: "Churchill Okoro",
      title: "UNIBEN resumes academic activities October 24",
      description:
        "The management of the University of Benin (UNIBEN) has said academic activities will resume on Monday, October 24 following the recently suspended strike by the Academic Staff Union of Universities (ASUU). The institution, in a statement issued by Benedicta Ehanire on Wednesday in Benin City, said lectures for the second semester, which was truncated for [&#8230;]read more UNIBEN resumes academic activities October 24",
      url: "https://businessday.ng/education/article/uniben-resumes-academic-activities-october-24/",
      source: "Businessday | News You Can Trust",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T15:21:30+00:00",
    },
    {
      author: "Ruth Carson",
      title: "Hedge Funds Are Betting U.K.’s Most Battered Assets Will Rebound",
      description:
        "Hedge Funds Are Betting U.K.’s Most Battered Assets Will Rebound",
      url: "https://www.bqprime.com/bloomberg/hedge-funds-are-betting-uk-s-most-battered-assets-will-rebound",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T15:23:40+00:00",
    },
    {
      author: "David Pan",
      title:
        "Bitcoin Miners Pan For Cash As Profits Dry Up And Crypto Markets Slump",
      description:
        "Bitcoin Miners Pan For Cash As Profits Dry Up And Crypto Markets Slump",
      url: "https://www.bqprime.com/business/bitcoin-miners-pan-for-cash-as-profits-dry-up-and-crypto-markets-slump",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T15:20:59+00:00",
    },
    {
      author: "Reuters",
      title:
        "U.S. single-family home starts fall to lowest level in more than two years",
      description:
        "U.S. homebuilding fell more than expected in September and the number of new groundbreakings for single-family homes tumbled to the lowest level in more than two years, according to Census Bureau data out Wednesday that showed the ongoing impact of the Federal Reserve&#8217;s interest rate hikes on the housing market. Housing starts dropped 8.1% to [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/u-s-single-family-home-starts-fall-to-lowest-level-in-more-than-two-years",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T15:48:04+00:00",
    },
    {
      author: "Reuters",
      title: "Tereos raises beet prices by 40% amid soaring EU sugar markets",
      description:
        "PARIS &#8212; France&#8217;s largest sugar and ethanol group Tereos raised the price at which it will buy sugar beets from its cooperative members by 40% from last year, aiming to pass on improved results amid soaring European sugar markets. In a letter sent to its 12,000 cooperative members on Tuesday, Tereos said that for the [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/tereos-raises-beet-prices-by-40-amid-soaring-eu-sugar-markets",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T16:22:27+00:00",
    },
    {
      author: "mbaker@thebtngroup.com (Michael B. Baker)",
      title: "Executive Travel Adds Business Development VP",
      description:
        "Executive Travel has appointed Jon Behner as VP of business development, a position in which he is responsible for acquiring mid- to large-market corporate business on a regional, national and global scale, the travel management company announced. &#160;",
      url: "https://www.businesstravelnews.com/Management/Executive-Travel-Adds-Business-Development-VP?utm_source=website&utm_medium=RSS&utm_campaign=btnrss2018",
      source: "Business Travel News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T18:05:10+00:00",
    },
    {
      author: "Bloomberg News",
      title: "Fed Could Potentially Pause Rate Hikes Next Year, Kashkari Says",
      description:
        "(Bloomberg) -- Federal Reserve Bank of Minneapolis President Neel Kashkari said that the US central bank could potentially pause its interest-rate increases at some point next year if policymakers see clear evidence that core inflation is slowing.",
      url: "https://financialpost.com/pmn/business-pmn/fed-could-potentially-pause-rate-hikes-next-year-kashkari-says",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T18:51:43+00:00",
    },
    {
      author: "Reuters",
      title:
        "Moldova to lend gas company $54 million so it can pay for supplies",
      description:
        "CHISINAU &#8212; Moldova&#8217;s pro-Western government will lend gas utility Moldovagaz 1.05 billion lei ($54 million) so it can pay Russian gas supplier Gazprom for supplies, Deputy Prime Minister Andrei Spinu said on Wednesday. In early October, Gazprom said it could shut off gas to Moldova completely unless all contractual obligations were met by Oct. 29, [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/moldova-to-lend-gas-company-54-million-so-it-can-pay-for-supplies",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T20:07:41+00:00",
    },
    {
      author: "Reuters",
      title: "Hog, cattle futures rise on cash market strength",
      description:
        "CHICAGO &#8212; Chicago Board of Trade hog and cattle futures rose on Wednesday, following gains made in the cash market earlier this week, traders said. CME December lean hog futures gained 0.9 cent to settle at 87.375 cents per lb. The contract faced technical resistance at the high end of its 20-day Bollinger range. Hog [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/hog-cattle-futures-rise-on-cash-market-strength-2",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T20:27:42+00:00",
    },
    {
      author: "Reuters",
      title: "Equities close lower as rise in yields overshadows earnings",
      description:
        "NEW YORK &#8212; U.S. stocks snapped a two-day streak of gains on Wednesday as weakness in shares of Abbott Laboratories and a rise in Treasury yields sapped momentum from the current earnings season and outweighed a surge in Netflix Inc shares. The yield on the 10-year U.S. Treasury note touched its highest level in more [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/equities-close-lower-as-rise-in-yields-overshadows-earnings-2",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T20:35:34+00:00",
    },
    {
      author: "Reuters",
      title: "Tesla misses quarterly revenue estimates; shares slump",
      description: "Tesla misses quarterly revenue estimates; shares slump",
      url: "https://www.investing.com/news/stock-market-news/tesla-misses-quarterly-revenue-estimates-2916441",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/trkd-images/LYNXMPEI9I0TY_L.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T20:36:40+00:00",
    },
    {
      author: null,
      title:
        "First Industrial Realty Trust FFO of $0.60 beats by $0.05, revenue of $139.75M beats by $6.54M",
      description:
        "First Industrial Realty Trust FFO of $0.60 beats by $0.05, revenue of $139.75M beats by $6.54M",
      url: "https://seekingalpha.com/news/3892912-first-industrial-realty-trust-ffo-of-0_60-beats-0_05-revenue-of-139_75m-beats-6_54m?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T21:11:26+00:00",
    },
    {
      author: "GlobeNewswire",
      title: "HOLY COW! ANNOUNCES TERMINATION OF MARKETING CAMPAIGN",
      description:
        "Vancouver, British Columbia, Oct. 19, 2022 (GLOBE NEWSWIRE) &#8212; Holy Cow Foods Inc. (NEO: HOLY; OTC Pink: HCWFF; Frankfurt: Z34) (“Holy Cow” or the “Company”) announces that the Company has terminated its agreement with MIC Market Information & Content Publishing GmbH (“MIC”), for marketing, promotional, and investor relations services (the “Agreement”). For further information respecting [&#8230;]",
      url: "https://financialpost.com/globe-newswire/holy-cow-announces-termination-of-marketing-campaign",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T21:41:00+00:00",
    },
    {
      author: "Reuters",
      title: "Canada promises industry it will respond to U.S. inflation act",
      description:
        "OTTAWA &#8212; Canada must strengthen its incentives meant to help industry scale up clean technologies after the United States passed massive investments in August to accelerate the green transition there, the finance minister said on Wednesday. The Inflation Reduction Act (IRA) was signed into law by U.S. President Joe Biden and contains incentives for consumers [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/canada-promises-industry-it-will-respond-to-u-s-inflation-act",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T22:23:21+00:00",
    },
    {
      author: "Reuters",
      title: "BMW chief warns against setting gas-powered phase-out date",
      description:
        "GREENVILLE &#8212; Setting a date to phase out gas-powered vehicles could remove &#8220;cheap cars&#8221; from the market, putting ownership out of reach for many, and be politically dangerous, the board chair of German automaker BMW Oliver Zipse said on Wednesday. Speaking ahead of the announcement of a $1.7 billion electric vehicle (EV) investment in South [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/bmw-chief-warns-against-setting-gas-powered-phase-out-date",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T22:43:56+00:00",
    },
    {
      author: "Reuters",
      title:
        "Neptune warns Dutch investment at risk if no windfall tax allowance",
      description:
        "AMSTERDAM &#8212; Neptune Energy could shift investments away from the Netherlands if they cannot be offset against a new windfall tax the Dutch government plans to impose in response to soaring energy prices, the oil and gas producer warned on Thursday. Neptune, the largest offshore gas producer in the Dutch North Sea, says it intends [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/neptune-warns-dutch-investment-at-risk-if-no-windfall-tax-allowance",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-19T23:00:55+00:00",
    },
    {
      author: null,
      title:
        "Crude oil prices start session mixed on uncertain demand, supply concerns; Brent hits $92.13/bbl",
      description:
        "Brent crude futures for December settlement LCOc1 fell 28 cents, or 0.3%, to $92.13 a barrel by 0010 GMT. US West Texas Intermediate crude for November delivery (WTI) CLc1, which expires on Thursday, rose 34 cents, or 0.4%, to $85.89 per barrel.",
      url: "https://www.businesstoday.in/commodities/story/crude-oil-prices-start-session-mixed-on-uncertain-demand-supply-concerns-brent-hits-9213bbl-350357-2022-10-20?utm_source=rssfeed",
      source: "Business Today | Latest Stock Market And Economy News India",
      image: null,
      category: "business",
      language: "en",
      country: "in",
      published_at: "2022-10-20T02:56:13+00:00",
    },
    {
      author: "Reuters",
      title: "Rupee may open near 83/USD; U.S. yields, yuan watched",
      description:
        "MUMBAI &#8212; The Indian rupee is tipped to open near its record low of 83 to the U.S. currency on Thursday, as the surge in Treasury yields and the dollar index, fueled a broader decline in Asian currencies and shares. The rupee is expected to open at 82.98-83.02 per U.S. dollar, compared with a record [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/rupee-may-open-near-83-usd-u-s-yields-yuan-watched-2",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T02:57:25+00:00",
    },
    {
      author: "Reuters",
      title: "China may buy more Russian copper to blunt expected premium hike",
      description:
        "BEIJING &#8212; Buyers of refined copper in China, the world&#8217;s biggest consumer of the red metal, may raise their purchases of Russian supply next year to reduce the impact of an expected increase in premiums from other global miners. Premiums of physical copper sales to China in 2023 are expected to rise to between $150 [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/china-may-buy-more-russian-copper-to-blunt-expected-premium-hike-2",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T02:56:43+00:00",
    },
    {
      author: "Rishabh Bhatnagar",
      title: "Indian Rupee Opens At Fresh Record Low Against U.S. Dollar",
      description: "Indian Rupee Opens At Fresh Record Low Against U.S. Dollar",
      url: "https://www.bqprime.com/business/indian-rupee-opens-at-fresh-record-low-against-us-dollar",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T03:43:04+00:00",
    },
    {
      author: "Patricia Cohen and Juho Kuva",
      title:
        "How Finnair’s Huge Bet on Faster Flights to Asia Suddenly Came Undone",
      description:
        "When Russia closed its airspace, it upended the decades-long strategy for making Finland a European travel hub to and from the East.",
      url: "https://www.nytimes.com/2022/10/20/business/economy/finnair-helsinki-airport-russia.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/14/business/00finnair-1/00finnair-1-moth.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T04:00:17+00:00",
    },
    {
      author: "Elizabeth Knight",
      title: "Virgin IPO closer to liftoff as revenue recovery picks up speed",
      description:
        "The market is already salivating over the prospect of Virgin listing on the ASX next year. Whether this timetable is achievable will be informed by the performance of the stock market.",
      url: "https://www.theage.com.au/business/companies/virgin-ipo-closer-to-liftoff-as-revenue-recovery-picks-up-speed-20221020-p5brfx.html?ref=rss&utm_medium=rss&utm_source=rss_business",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.29419726713048305%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_104%2C$y_207/t_crop_custom/q_86%2Cf_jpg/faf092c51508e1e5c7c4db4add6c2dc708ef74a9",
      category: "business",
      language: "en",
      country: "au",
      published_at: "2022-10-20T04:54:57+00:00",
    },
    {
      author: "Yes Securities",
      title:
        "UltraTech Cement Q2 Review - Strong Net Sales Realisation Upholds Profitability: Yes Securities",
      description:
        "UltraTech Cement Q2 Review - Strong Net Sales Realisation Upholds Profitability: Yes Securities",
      url: "https://www.bqprime.com/research-reports/ultratech-cement-q2-review-strong-net-sales-realisation-upholds-profitability-yes-securities",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T05:42:16+00:00",
    },
    {
      author: null,
      title: "China keeps benchmark lending rates unchanged",
      description: "China keeps benchmark lending rates unchanged",
      url: "https://seekingalpha.com/news/3892953-china-keeps-benchmark-lending-rates-unchanged?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T05:56:29+00:00",
    },
    {
      author: "Jiya Saini",
      title:
        "U.S. Healthcare Crisis Can Change Outcome Of November’s Midterm Elections, New Poll Finds",
      description:
        "According to a new poll from West Health and Gallup, nearly 9 in 10 Americans believe a candidate&#8217;s proposal to reduce healthcare costs will influence their vote, and nearly 40%, or 100 million Americans, say it might make them cross party lines in the midterm elections. In a nationally representative survey of over 5,500 Americans, [&#8230;]The post U.S. Healthcare Crisis Can Change Outcome Of November’s Midterm Elections, New Poll Finds appeared first on Revyuh.",
      url: "https://www.revyuh.com/news/politics/u-s-healthcare-crisis-can-change-outcome-of-novembers-midterm-elections-new-poll-finds/",
      source: "Revyuh Media",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T08:00:00+00:00",
    },
    {
      author: null,
      title: "Warning: NOVA is at high risk of performing badly",
      description: "Warning: NOVA is at high risk of performing badly",
      url: "https://seekingalpha.com/warnings/3892992-warning-nova-is-high-risk-of-performing-badly?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T08:07:46+00:00",
    },
    {
      author: "PTI",
      title:
        "Glenmark Pharma Launches Drug For Diabetic Patients With Comorbidities",
      description:
        "Glenmark Pharma Launches Drug For Diabetic Patients With Comorbidities",
      url: "https://www.bqprime.com/business/glenmark-pharma-launches-drug-for-diabetic-patients-with-comorbidities",
      source: "Bloomberg | Latest And Live Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T08:34:29+00:00",
    },
    {
      author: "zee business",
      title:
        "Microsoft Xbox mobile store coming soon- Big challenge for Google and Apple?",
      description:
        "Microsoft Xbox mobile store: To build a gaming store, the tech giant might use the successful mobile games Candy Crush Saga and Call of Duty: Mobile, which are produced by Activision and King, respectively.",
      url: "https://www.zeebiz.com/technology/apps/news-microsoft-xbox-mobile-store-coming-soon-big-challenge-for-google-and-apple-204084",
      source: "Zee Business",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T08:34:17+00:00",
    },
    {
      author: null,
      title:
        "German producer inflation surges again at record peak in September",
      description:
        "German producer inflation surges again at record peak in September",
      url: "https://seekingalpha.com/news/3893003-german-producer-inflation-surges-again-at-record-peak-in-september?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T08:31:30+00:00",
    },
    {
      author: "Investing.com",
      title: "Centamin Plc. PT Raised to GBP1.15 at Berenberg",
      description: "Centamin Plc. PT Raised to GBP1.15 at Berenberg",
      url: "https://www.investing.com/news/pro/centamin-plc-pt-raised-to-gbp115-at-berenberg-432SI-2916971",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/news/news_headline_rolled_108x81.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T09:26:05+00:00",
    },
    {
      author: "Investing.com",
      title: "WD-40 PT Raised to $207 at DA Davidson",
      description: "WD-40 PT Raised to $207 at DA Davidson",
      url: "https://www.investing.com/news/pro/wd40-pt-raised-to-207-at-da-davidson-432SI-2917124",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/news/international_newspapers_108x81.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T10:56:02+00:00",
    },
    {
      author: null,
      title: "Vertiv gains on report activist Starboard has taken stake",
      description: "Vertiv gains on report activist Starboard has taken stake",
      url: "https://seekingalpha.com/news/3893065-vertiv-gains-on-report-activist-starboard-has-taken-stake?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T11:23:10+00:00",
    },
    {
      author: null,
      title: "Societal CDMO signs two CDMO service agreements",
      description: "Societal CDMO signs two CDMO service agreements",
      url: "https://seekingalpha.com/news/3893085-societal-cdmo-signs-two-cdmo-service-agreements?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T11:47:45+00:00",
    },
    {
      author: "Catherine Percy",
      title: "6 Things Medicare Does Not Cover",
      description:
        "Medicare insurance is a great way to protect seniors against the financial burden of medical expenses in retirement. However, Medicare does not cover everything. Its coverage is precise and restricted. If you&#8217;re considering signing up for Medicare, you must understand what it covers and doesn&#8217;t. If you are enrolled in Medicare, there are some things [&#8230;]The post 6 Things Medicare Does Not Cover appeared first on ABC Money.",
      url: "https://www.abcmoney.co.uk/2022/10/20/6-things-medicare-does-not-cover/",
      source: "ABC Money",
      image: null,
      category: "business",
      language: "en",
      country: "uk",
      published_at: "2022-10-20T12:27:00+00:00",
    },
    {
      author: null,
      title:
        "Leidos subsidiary wins DoD contract to boost hypersonic flight testing",
      description:
        "Leidos subsidiary wins DoD contract to boost hypersonic flight testing",
      url: "https://seekingalpha.com/news/3893119-leidos-subsidiary-wins-dod-contract-to-boost-hypersonic-flight-testing?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T12:27:18+00:00",
    },
    {
      author: null,
      title:
        "Erasca forms clinical trial partnership with Pfizer for cancer therapy",
      description:
        "Erasca forms clinical trial partnership with Pfizer for cancer therapy",
      url: "https://seekingalpha.com/news/3893115-erasca-forms-clinical-trial-partnership-with-pfizer-for-cancer-therapy?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T12:25:53+00:00",
    },
    {
      author: null,
      title:
        "Germany challenges ‘political’ gas cap plan ahead of EU energy summit",
      description:
        "Chancellor Olaf Scholz warns supplies could be diverted to countries willing to pay more for imports",
      url: "https://www.ft.com/content/80aea0bf-2d05-4292-8542-e07929fc663b",
      source: "Financial Times",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T12:28:38+00:00",
    },
    {
      author: "Reuters",
      title: "Liz Truss to quit as UK prime minister next week",
      description:
        "* Truss says she will resign * A new leader to be found next week (Adds meetings in Downing Street) By Elizabeth Piper, Andrew MacAskill and Muvija M LONDON, Oct 20 (Reuters) &#8211; Liz Truss said on Thursday she was resigning as British prime minister just six weeks after she was appointed, brought down by [&#8230;]",
      url: "https://financialpost.com/pmn/business-pmn/liz-truss-to-quit-as-uk-prime-minister-next-week",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T12:55:31+00:00",
    },
    {
      author: "Kemi Ajumobi",
      title: "Tony Joy – Founder/Director, Durian Nigeria",
      description:
        "Tony Joy creates sustainable solutions and programs to empower women in rural communities. Through Durian Nigeria, an organisation she founded, she is empowering rural women to become self-sufficient by providing them with the knowledge and skills needed to transform their local waste into a means of livelihood. Her role as founder and director within the [&#8230;]read more Tony Joy &#8211; Founder/Director, Durian Nigeria",
      url: "https://businessday.ng/interview/women-in-business/article/tony-joy-founder-director-durian-nigeria/",
      source: "Businessday | News You Can Trust",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T12:56:40+00:00",
    },
    {
      author: "Investing.com",
      title: "Credo Technology Group Holding Ltd. PT Lowered to $16 at Stifel",
      description:
        "Credo Technology Group Holding Ltd. PT Lowered to $16 at Stifel",
      url: "https://www.investing.com/news/pro/credo-technology-group-holding-ltd-pt-lowered-to-16-at-stifel-432SI-2917357",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/news/World_News_10_M_1440052130.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T12:57:08+00:00",
    },
    {
      author: "Catherine Percy",
      title: "How to Get Started with Crypto: A Beginner’s Guide",
      description:
        "If you’re reading this article, then chances are you’ve at least heard of Bitcoin – even if you don’t quite understand what it is. And that’s okay. The world of cryptocurrency can be daunting and confusing for those who are just getting started. But don’t worry, we’re here to help. In this beginner’s guide, we’ll [&#8230;]The post How to Get Started with Crypto: A Beginner’s Guide appeared first on ABC Money.",
      url: "https://www.abcmoney.co.uk/2022/10/20/how-to-get-started-with-crypto-a-beginners-guide/",
      source: "ABC Money",
      image: null,
      category: "business",
      language: "en",
      country: "uk",
      published_at: "2022-10-20T13:23:19+00:00",
    },
    {
      author: "AFP",
      title: "Britons skipping meals in cost of living crisis: poll",
      description:
        "80 per cent of those surveyed said they were finding it difficult financially",
      url: "https://www.thehindubusinessline.com/news/world/britons-skipping-meals-in-cost-of-living-crisis-poll/article66035343.ece",
      source: "Business Line",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T13:39:04+00:00",
    },
    {
      author: null,
      title: "Chemtrade Logistics Income Fund declares CAD 0.05 dividend",
      description: "Chemtrade Logistics Income Fund declares CAD 0.05 dividend",
      url: "https://seekingalpha.com/news/3893212-chemtrade-logistics-income-fund-declares-cad-005-dividend?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T13:59:36+00:00",
    },
    {
      author: "Reuters",
      title:
        "Moscow says U.S. sanctions charges against 5 Russians are 'cynical' bid to intimidate",
      description:
        "Moscow says U.S. sanctions charges against 5 Russians are 'cynical' bid to intimidate",
      url: "https://www.investing.com/news/stock-market-news/moscow-says-us-sanctions-charges-against-5-russians-are-cynical-bid-to-intimidate-2917473",
      source: "Investing.com | Stock Market Quotes &amp; Financial News",
      image:
        "https://i-invdn-com.investing.com/trkd-images/LYNXMPEI9J0MJ_L.jpg",
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T14:06:19+00:00",
    },
    {
      author: "Bloomberg News",
      title: "Russia Removed From Nuclear-Energy Stage at Washington Summit",
      description:
        "Russia lost its place on stage at a key international nuclear summit in Washington next week, as US authorities seek ways to limit the influence of Kremlin-controlled atomic fuel and technology suppliers on the global market.",
      url: "https://financialpost.com/pmn/business-pmn/russia-removed-from-nuclear-energy-stage-at-washington-summit",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T14:05:52+00:00",
    },
    {
      author: "Music Business Worldwide",
      title: "Live music is falling apart.",
      description:
        "The following MBW column comes from London-based music industry journalist and author Eamonn FordeSource",
      url: "https://www.musicbusinessworldwide.com/live-music-is-falling-apart/",
      source: "Music Business Worldwide",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T14:14:35+00:00",
    },
    {
      author: null,
      title:
        "Einhorn's Greenlight exited Chemours, Playboy and Warner Bros Discover in Q3",
      description:
        "Einhorn's Greenlight exited Chemours, Playboy and Warner Bros Discover in Q3",
      url: "https://seekingalpha.com/news/3893226-einhorns-greenlight-exited-chemours-playboy-and-warner-bros-discover-in-q3?utm_source=feed_news_all&utm_medium=referral",
      source: "Seeking Alpha",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T14:11:56+00:00",
    },
    {
      author: "The Associated Press",
      title: "Average long-term US mortgage rates rise this week to 6.94%",
      description:
        "Average long-term U.S. mortgage rates inched up this week ahead of another expected rate increase by the Federal Reserve when it meets early next month.",
      url: "https://libn.com/2022/10/20/average-long-term-us-mortgage-rates-rise-this-week-to-6-94/",
      source: "Long Island Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T14:31:10+00:00",
    },
    {
      author: "Bloomberg News",
      title:
        "Conspiracy Theories Spread Quickly on TikTok. Health Officials Need to Be as Fast",
      description:
        "Misinformation spreads so quickly that public health officials should be monitoring social media platforms in real time to debunk bogus claims as fast as possible, a new study suggested.",
      url: "https://financialpost.com/pmn/business-pmn/conspiracy-theories-spread-quickly-on-tiktok-health-officials-need-to-be-as-fast",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T14:41:39+00:00",
    },
    {
      author: "Business Wire",
      title:
        "Schneider Electric Unveils New Products to Increase Energy Efficiency on the Path to a Net-Zero World",
      description:
        "Industry leader continues to pave the way to a more sustainable future with announcements at its annual North American Innovation Summit These innovative products will support customers in their sustainability goals, enhancing smart energy capabilities and efficiencies across office buildings, factories, and homes New solutions are driven by the need to increase efficiency through digitization [&#8230;]",
      url: "https://financialpost.com/pmn/press-releases-pmn/business-wire-news-releases-pmn/schneider-electric-unveils-new-products-to-increase-energy-efficiency-on-the-path-to-a-net-zero-world",
      source: "Financial Post | Canada Business News",
      image: null,
      category: "business",
      language: "en",
      country: "us",
      published_at: "2022-10-20T15:12:27+00:00",
    },
  ],
};

export const entertainment = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 100,
    total: 9250,
  },
  data: [
    {
      author: "Stephanie Bunbury",
      title:
        "‘Go and hide’: Anne Hathaway, Jeremy Strong and the lie that fuels America",
      description:
        "As James Gray’s parents in Armageddon Time, the actors confront the privilege that shapes us all.",
      url: "https://www.theage.com.au/culture/movies/go-and-hide-anne-hathaway-jeremy-strong-and-the-lie-that-fuels-america-20221101-p5buly.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.3234%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_219/t_crop_custom/q_86%2Cf_jpg/f3e97284f6ff6572fb56add2eae021cbddcbad65",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-03T01:22:52+00:00",
    },
    {
      author: "Jo Roberts",
      title:
        "Killing it: the original riot grrrls return, just as we need them most",
      description:
        "The feminist punk icon and lead singer of Bikini Kill, Kathleen Hanna still has plenty to say. ",
      url: "https://www.theage.com.au/culture/music/killing-it-the-original-riot-grrrls-return-just-as-we-need-them-most-20221101-p5bupz.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.187%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_185/t_crop_custom/q_86%2Cf_jpg/4720f4d04a430ca350dcd6336b521148e67b5bb6",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-03T05:00:00+00:00",
    },
    {
      author: "Owen Richardson",
      title: "Dread and menace at the bottom of America’s pecking order",
      description:
        "It’s been seven years since American novelist Atticus Lish’s first book won an enthusiastic reception. Now, here comes the difficult second novel.",
      url: "https://www.theage.com.au/culture/books/dread-and-menace-at-the-bottom-of-america-s-pecking-order-20221102-p5bv2l.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.5753%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_1006/t_crop_custom/q_86%2Cf_jpg/6186b878be9ecaa3c5174bf8a96eb982b48a9dec",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-03T05:00:00+00:00",
    },
    {
      author: "Ligaya Mishan and Esther Choi",
      title: "Can Cultural Identity Be Defined by Food?",
      description:
        "Cuisine is one of the few ways to characterize Singapore’s Peranakan culture, a hard-to-pin-down blend of ethnic and racial identities.",
      url: "https://www.nytimes.com/2022/11/03/t-magazine/singapore-peranakan-cuisine.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-03T09:03:21+00:00",
    },
    {
      author: "Hanya Yanagihara",
      title: "How Do You Visit a Vanished World?",
      description:
        "For T’s Winter Travel issue, we look at three cultures that have all but disappeared — or been resurrected.",
      url: "https://www.nytimes.com/2022/11/03/t-magazine/travel-lost-worlds-culture.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-03T09:03:05+00:00",
    },
    {
      author: "Jeannette Catsoulis",
      title:
        "‘Something in the Dirt’ Review: The Truth Is Over There, by the Sofa",
      description:
        "Two likable losers fall into conspiratorial rabbit holes while filming the strange goings-on in their apartment building.",
      url: "https://www.nytimes.com/2022/11/03/movies/something-in-the-dirt-review.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-03T11:00:06+00:00",
    },
    {
      author: "Chelsea Ritschel",
      title:
        "Sheryl Lee Ralph sparks debate after criticising Delta for not accommodating late check-in: ‘Entitled’",
      description:
        "Actor says airline employee ‘didn’t even want to see my status’",
      url: "https://www.independent.co.uk/life-style/sheryl-lee-ralph-delta-air-line-check-in-b2217082.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/03/16/delta.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T17:44:36+00:00",
    },
    {
      author: "",
      title: "Prince William and Kate announce massive funding grant",
      description:
        "The Prince and Princess of Wales during a visit to Scarborough announced $613,500 worth of funding from The Royal Foundation for youth projects.",
      url: "https://www.smh.com.au/lifestyle/prince-william-and-kate-announce-massive-funding-grant-20221104-p5bvi9.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/5323f8c80a6b5b69a0138c2f2f2ea65bfd01d7eb",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-03T19:44:09+00:00",
    },
    {
      author: "",
      title: "Why you shouldn't drink coffee on an empty stomach",
      description:
        'A nutritionist has warned against drinking a coffee first thing in the morning before you eat as it can "mess with your hormones".',
      url: "https://www.smh.com.au/lifestyle/health-and-wellness/why-you-shouldnt-drink-coffee-on-an-empty-stomach-20221104-p5bvk3.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/fc1c48c0bed7276a77d9281d3096137c88e73a51",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-03T22:39:55+00:00",
    },
    {
      author: "",
      title: "Why you shouldn't drink coffee on an empty stomach",
      description:
        'A nutritionist has warned against drinking a coffee first thing in the morning before you eat as it can "mess with your hormones".',
      url: "https://www.theage.com.au/lifestyle/health-and-wellness/why-you-shouldnt-drink-coffee-on-an-empty-stomach-20221104-p5bvk3.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/fc1c48c0bed7276a77d9281d3096137c88e73a51",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-03T22:39:55+00:00",
    },
    {
      author: "",
      title:
        "NRLW star Tiana Penitani's open conversation about periods and sport",
      description:
        "Tiana Penitani speaks with young athletes about how their period affects their sporting aspirations.",
      url: "https://www.theage.com.au/lifestyle/nrlw-star-tiana-penitanis-open-conversation-about-periods-and-sport-20221104-p5bvle.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/4e84ba75b2ee773e9a1ee28ebbd79e494e6370e7",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-04T00:04:45+00:00",
    },
    {
      author: "Nina Allan",
      title: "We Spread by Iain Reid review – a fine piece of weird fiction",
      description:
        "A widow finds herself in a sinister care home, in this meditation on ageing, trauma and identity from the author behind I’m Thinking of Ending ThingsRecently widowed, Penny is now living alone in the apartment she shared with her husband for many years. Her days seem longer than before, and her memory is not as reliable as it used to be. Her apartment, so familiar, seems alive with strange presences and Penny gradually becomes convinced that someone is watching her.While trying to change a lightbulb, she falls and injures herself. As she regains consciousness, she discovers that arrangements...",
      url: "https://www.theguardian.com/books/2022/nov/04/we-spread-by-iain-reid-review-a-fine-piece-of-weird-fiction",
      source: "The Guardian",
      image:
        "https://i.guim.co.uk/img/media/a1f98bd2193ac940c4d3f20be64def49d43c6d8d/0_0_6000_3600/master/6000.jpg?width=140&quality=85&auto=format&fit=max&s=f323fbc7f20cada57dbcae0f4b564e26",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T07:30:37+00:00",
    },
    {
      author: "Laura Hampson",
      title:
        "Expert explains how to help dogs cope with fireworks on Bonfire Night",
      description:
        "Dogs can freeze with fear or even charge fences as a reaction to fireworks",
      url: "https://www.independent.co.uk/life-style/firework-display-safety-bonfire-night-dogs-cats-b2216674.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/22/12/dog-frightened-hiding.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T11:00:50+00:00",
    },
    {
      author: "Simon Calder",
      title: "Heathrow strike to disrupt travel plans as World Cup kicks off",
      description:
        "Industrial action particularly affects Qatar Airways, which has scheduled an additional 10 flights a week",
      url: "https://www.independent.co.uk/travel/news-and-advice/heathrow-airport-strike-world-cup-qatar-b2217612.html",
      source: "The Independent - Travel",
      image:
        "https://static.independent.co.uk/2022/10/21/11/newFile-4.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T11:02:38+00:00",
    },
    {
      author: "Fiona Beckett",
      title:
        "What wines work best for Bonfire Night mulled wine? | Fiona Beckett on drink",
      description:
        "Don’t assume corked or bad wine is OK for cooking with, and especially not for mulling. You’ll need a lush, drinkable red, and at a price to suit youIt’s fireworks weekend, and we’re firmly into the mulling season. As with everything to do with wine, that tends to elicit a certain sniffiness, often along the lines of: “Why wouldn’t you just drink a decent glass of red?” But I have to confess I actually like the stuff. After all, as I said last week, it’s all about hygge at this time of year.Much as when you use wine in other cooking, there are some basic guidelines, my top tip...",
      url: "https://www.theguardian.com/food/2022/nov/04/what-wines-work-best-for-bonfire-night-mulled-wine",
      source: "The Guardian",
      image:
        "https://i.guim.co.uk/img/media/f19fc822e4d1f3043967d0a551303e4231a0d76b/0_123_5760_3456/master/5760.jpg?width=140&quality=85&auto=format&fit=max&s=86d60f1eea3a6fd55561d0ac89004378",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T14:00:51+00:00",
    },
    {
      author: "Chelsea Ritschel and Peony Hirwani",
      title:
        "Johnny Depp news – live: Rihanna fans call for boycott of Savage x Fenty over Depp cameo",
      description:
        "Upcoming fashion show sees Depp appear for a ‘star’ moment in the Savage x Fenty campaign",
      url: "https://www.independent.co.uk/life-style/johnny-depp-rihanna-fenty-fashion-show-b2217903.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/03/19/rihanna.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T15:28:54+00:00",
    },
    {
      author: "Cassie Tongue",
      title:
        "RBG: Of Many, One review – Ruth Bader Ginsburg play is sincere, but slips into triteness",
      description:
        "Wharf 1 Theatre, Sydney Theatre CompanySuzie Miller’s play about the US supreme court justice is thoughtful and occasionally frustrating – but it feels like Australia isn’t the true intended audienceRuth Bader Ginsburg, the second woman ever appointed to the supreme court of the United States, became the memefied face of a certain brand of American feminism during the presidency of Donald Trump. Beatified into a pop-culture symbol, the words and iconography of “the Notorious RBG” broke through the news-noise and resonated with many in the last years of her life. At the 2017 Women’s...",
      url: "https://www.theguardian.com/stage/2022/nov/05/rbg-of-many-one-review-ruth-bader-ginsburg-play-is-sincere-but-slips-into-triteness",
      source: "The Guardian",
      image:
        "https://i.guim.co.uk/img/media/9ef9a321ac3fff64cffcc1b289a6cd225c68df37/0_55_1920_1152/master/1920.jpg?width=140&quality=85&auto=format&fit=max&s=24dff0d031061fee1f7b236a20fb3887",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-04T19:00:30+00:00",
    },
    {
      author: "Meredith Clark",
      title:
        "Love Is Blind stars Raven Ross and SK Alagbada break silence on wedding episode",
      description:
        "Warning: This article contains spoilers about ‘Love Is Blind’ season three",
      url: "https://www.independent.co.uk/life-style/love-is-blind-spoilers-raven-sk-season-3-b2218087.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/03/14/Love_Is_Blind_S3_E9_00_22_19_14R.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T19:11:32+00:00",
    },
    {
      author: "TMZ Staff",
      title: "Phillies vs. Astros -- MLB World Series WAGs!",
      description:
        "The Astros and Phillies are duking it out in the World Series -- but the players wouldn't have gotten to this point without the passionate support from their lovely partners -- so let's meet them! Astros ace Justin Verlander's wife, Kate Upton,&hellip;",
      url: "https://www.tmz.com/2022/11/05/mlb-world-series-wags-astros-phillies-photos/",
      source: "TMZ",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-05T07:25:20+00:00",
    },
    {
      author: "Meredith Clark",
      title:
        "Who are the Love Is Blind couples that get married in season three?",
      description:
        "Spoiler warning! The latest episodes reveal which couples make it to the altar",
      url: "https://www.independent.co.uk/life-style/love-is-blind-couples-season-3-spoilers-b2216242.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/02/16/Love_Is_Blind_S3_E8_00_43_52_21R.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-02T16:31:14+00:00",
    },
    {
      author: "Susan Chenery",
      title:
        "How a hit podcast inspired Holly Throsby’s dark new ‘anti-crime’ novel",
      description:
        "The musician-turned-author’s third novel Clarke is the story of people on the periphery of a violent crime.",
      url: "https://www.theage.com.au/culture/books/how-a-hit-podcast-inspired-holly-throsby-s-dark-new-anti-crime-novel-20221101-p5buo6.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_1.0347%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/2252744ca63fdd37e2ba3260547d0a5eb1517f53",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-03T00:25:00+00:00",
    },
    {
      author: "Brian Seibert",
      title: "Review: Ayodele Casel Returns to the Joyce With ‘Chasing Magic’",
      description:
        "Originally a virtual production earlier in the pandemic, this live version features an improvised duet between Casel and the pianist Arturo O’Farrill.",
      url: "https://www.nytimes.com/2022/11/03/arts/dance/ayodele-casel-chasing-magic-review.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/03/arts/03casel/03casel-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-03T17:21:04+00:00",
    },
    {
      author: "Kate Halfpenny",
      title: "Life’s golden rule: Whatever you do, don’t look back",
      description:
        "Whether you are carrying something precious or stepping before a crowd, there’s a secret to doing it successfully. And it points the way to how you should live life.",
      url: "https://www.smh.com.au/lifestyle/life-and-relationships/life-s-golden-rule-whatever-you-do-don-t-look-back-20221103-p5bvaw.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$zoom_0.1643485100645248%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_jpg/9bd408b94a3b818bbc1cb59c88931c162e5508df",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-04T00:23:12+00:00",
    },
    {
      author: "Terry Durack",
      title: "Is dining going to the dogs?",
      description:
        "Pet-friendly cafes and hotels have become the norm. But why is no one talking about the downside?",
      url: "https://www.smh.com.au/lifestyle/life-and-relationships/is-dining-going-to-the-dogs-20220922-p5bk9u.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$zoom_0.7852%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_4/t_crop_custom/q_86%2Cf_jpg/be9c4ce9c3916378074f2212388e5bbb6e9e4b4e",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-04T04:52:00+00:00",
    },
    {
      author: "Amber Raiken",
      title:
        "Fans jokingly accuse Taylor Swift of ruining their weddings after singer announces tour dates",
      description:
        "‘What are the odds that Taylor’s going to be in my city on my wedding day?,’ one fan said on TikTok",
      url: "https://www.independent.co.uk/life-style/taylor-swift-tour-2023-eras-wedding-b2217486.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/03/17/taylor-swift-wedding-tour.png?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T07:10:40+00:00",
    },
    {
      author: "Laura Hampson",
      title:
        "Woman reveals first warning sign of tumours that made her brain look like a ‘fruit bowl’",
      description:
        "Kaylee Crawshaw, 33, compared the tumours to a lime and a gooseberry",
      url: "https://www.independent.co.uk/life-style/health-and-families/brain-tumour-symptons-signs-headaches-b2217511.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/04/07/mum-suffering-f-910971%20%281%29.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T08:06:46+00:00",
    },
    {
      author: "Sam Lubell",
      title: "At Home Beneath the Waves",
      description:
        "Those fascinated by the ocean can now vacation, dine or even live underwater in these specially designed locations.",
      url: "https://www.nytimes.com/2022/11/04/realestate/under-water-restaurants-vacations.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/05/multimedia/05sp-water-homes-inyt4/05sp-water-homes-inyt4-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T09:00:23+00:00",
    },
    {
      author: "Alex Hawgood",
      title: "A Fashion Model With an Activist Streak",
      description:
        "Yves Mathieu-East uses his body as a mural to tell his story of being a Black, queer model, activist and singer.",
      url: "https://www.nytimes.com/2022/11/04/style/yves-mathieu-east.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/04/fashion/04UPNEXT-Matheiu-1/04UPNEXT-Matheiu-1-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T09:00:36+00:00",
    },
    {
      author: "Toussaint Egan",
      title: "The best movies on Netflix right now",
      description:
        "Photo: Julien Goldstein/Netflix Skip the algorithm and go straight to the good stuff Continue reading&hellip;",
      url: "https://www.polygon.com/21266801/best-movies-on-netflix",
      source: "Polygon",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T15:12:58+00:00",
    },
    {
      author: "Anna Pasternak",
      title:
        "I wrote a book about Diana. It took me 20 years to recover from the critics",
      description:
        "As controversy reigns over The Crown, Anna Pasternak feels sympathy for its creator Peter Morgan.",
      url: "https://www.theage.com.au/culture/tv-and-radio/i-wrote-a-book-about-diana-it-took-me-20-years-to-recover-from-the-critics-20221103-p5bvce.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.3578%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_750%2C$y_57/t_crop_custom/q_86%2Cf_jpg/e1cbad152bcac1309b0627cd781fb8f98cb1fa6a",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-04T19:03:00+00:00",
    },
    {
      author: "Clay Risen",
      title:
        "Katherine Duncan-Jones, Who Cast Shakespeare as a Boor, Dies at 81",
      description:
        "A fearless scholar of English literature, she argued in books and interviews that the revered playwright was a narcissist, misogynist and social climber.",
      url: "https://www.nytimes.com/2022/11/04/books/katherine-duncan-jones-dead.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T20:50:22+00:00",
    },
    {
      author: "James B. Stewart and Rachel Abrams",
      title:
        "How an LAPD Officer Helped Les Moonves Fight an Assault Complaint",
      description:
        "A captain in the department, who had moonlighted as a security guard for CBS, disclosed to the network information about a confidential complaint made in 2017 against the C.E.O.",
      url: "https://www.nytimes.com/2022/11/04/business/media/les-moonves-lapd.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/05/business/04JPmoonves-print/04moonves-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T22:54:34+00:00",
    },
    {
      author: "Helen Pitt",
      title: "The greatest female Australian artist we never knew",
      description:
        "Clarice Beckett seldom signed her canvases and sold few. A new book explains why the tonalist painter is now one of the nation’s most popular.",
      url: "https://www.theage.com.au/culture/art-and-design/the-greatest-female-australian-artist-we-never-knew-20221026-p5bt0b.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.883%2C$multiply_0.3720%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_53/t_crop_custom/q_86%2Cf_auto/9fb76c530d04af401503b61e8d0c1b57f8c9b318",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-02T18:00:00+00:00",
    },
    {
      author: "Stephanie Lai",
      title:
        "Campaigns Pay Influencers to Carry Their Messages, Skirting Political Ad Rules",
      description:
        "Campaigns are using social media influencers as a way to reach young and diverse voters, a novel and mostly unregulated strategy. Some are even spreading the message through dating apps.",
      url: "https://www.nytimes.com/2022/11/02/us/elections/influencers-political-ads-tiktok-instagram.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/02/us/politics/02DC-influencers-1/merlin_215568891_963ffe95-e154-470e-9d68-37234faf6a02-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-02T20:01:01+00:00",
    },
    {
      author: "Cherie Gilmour",
      title: "Help, I care more about the gift shops in galleries than the art",
      description:
        "I’ve always been far more comfortable in the bright lights of the souvenir shop than in the hallowed halls of the gallery.",
      url: "https://www.theage.com.au/culture/art-and-design/help-i-care-more-about-the-gift-shops-in-galleries-than-the-art-20221031-p5buf8.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.6114318706697459%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_267/t_crop_custom/q_86%2Cf_jpg/cded26fbcb2460bcfe8496a2959a28181f03fb5a",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-02T22:45:28+00:00",
    },
    {
      author: "Steve Richmond",
      title:
        "Most parents ‘haven’t talked to their children about fireworks safety’",
      description:
        "‘With sparklers burning 16 times hotter than your kettle, they can badly burn,’ charity boss warns",
      url: "https://www.independent.co.uk/life-style/fireworks-safety-children-bonfire-night-b2216150.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/09/30/15/iStock-623879938fireworks.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T00:54:47+00:00",
    },
    {
      author: "Stephanie Bunbury",
      title:
        "‘Go and hide’: Anne Hathaway, Jeremy Strong and the lie that fuels America",
      description:
        "As James Gray’s parents in Armageddon Time, the actors confront the privilege that shapes us all.",
      url: "https://www.smh.com.au/culture/movies/go-and-hide-anne-hathaway-jeremy-strong-and-the-lie-that-fuels-america-20221101-p5buly.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$zoom_0.3234%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_219/t_crop_custom/q_86%2Cf_jpg/f3e97284f6ff6572fb56add2eae021cbddcbad65",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-03T01:22:52+00:00",
    },
    {
      author: "Meredith Clark",
      title:
        "Who are the Love Is Blind couples that get married in season three?",
      description:
        "Spoiler warning! The latest episodes reveal which couples make it to the altar",
      url: "https://www.independent.co.uk/life-style/love-is-blind-couples-season-3-spoilers-b2216906.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/02/16/Love_Is_Blind_S3_E8_00_43_52_21R.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T13:27:49+00:00",
    },
    {
      author: "Amber Raiken",
      title:
        "Fans stunned over Zac Efron’s new hairstyle for his upcoming movie: ‘I’m screaming’",
      description: "The actor is currently filming a new A24 drama film.",
      url: "https://www.independent.co.uk/life-style/zac-efron-hairstyle-photo-twitter-b2217028.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/03/15/GettyImages-1243210103.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T16:34:41+00:00",
    },
    {
      author: "Hugh Morris",
      title: "When Technology Makes Music More Accessible",
      description:
        "In Britain and Ireland, a series of recent projects show the rich possibilities when disability and neurodiversity are considered in the creative process.",
      url: "https://www.nytimes.com/2022/11/03/arts/music/technology-disability-music.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-03T16:47:56+00:00",
    },
    {
      author: "Damien Woolnough",
      title:
        "Rihanna ignores Johnny Depp’s dirty laundry for her lingerie show",
      description:
        "Following a series of public court cases Johnny Depp is returning to the spotlight in the next Fenty x Savage show. Maybe there’s hope for Kanye yet.",
      url: "https://www.theage.com.au/lifestyle/fashion/rihanna-ignores-johnny-depp-s-dirty-laundry-for-her-lingerie-show-20221104-p5bvn7.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.4708%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_181%2C$y_0/t_crop_custom/q_86%2Cf_jpg/7c627561c8aa25f3abfdc28ccb9c4db0bfe4380b",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-04T05:02:58+00:00",
    },
    {
      author: "Esther Linder",
      title: "The Australian band making a comeback after tragedy",
      description:
        "Underground Melbourne act NO ZU describe themselves as an “Australiana warped nightclub fever dream”.",
      url: "https://www.theage.com.au/culture/music/the-australian-band-making-a-comeback-after-tragedy-20221102-p5buzy.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.2857803362573099%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_219%2C$y_376/t_crop_custom/q_86%2Cf_jpg/2c538baedaa9c9c07548b4c35c99012a92459bdc",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-04T06:06:01+00:00",
    },
    {
      author: "Amber Raiken",
      title:
        "Female pilot reveals airport employee mistook her for flight attendant: ‘I’m offended for you’",
      description:
        "‘It’s jarring to me,’ the pilot wrote about the incident on TikTok.",
      url: "https://www.independent.co.uk/life-style/female-pilot-flight-attendant-tiktok-b2216547.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/02/14/pilot-tiktok.png?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T06:07:14+00:00",
    },
    {
      author: "TMZ Staff",
      title:
        "Cops Investigating Argument Over Basketball that Led to Takeoff's Shooting Death",
      description:
        "Cops are trying to piece together the argument that escalated to the point of gunfire in the fatal shooting of Takeoff, and the triviality of the whole thing is just mind-boggling. Law enforcement sources tell us ... angry words were exchanged&hellip;",
      url: "https://www.tmz.com/2022/11/04/takeoff-quavo-argument-shooting-death-cops-investigating/",
      source: "TMZ",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T08:00:46+00:00",
    },
    {
      author: "Kathryn Shattuck",
      title: "‘The Crown’ Has a New Diana and Charles to Tear Apart",
      description:
        "Season 5 tracks the collapse of the royals’ marriage. In a joint interview, Elizabeth Debicki and Dominic West discuss the challenge of taking on these roles and the scrutiny the show has received since Queen Elizabeth’s death.",
      url: "https://www.nytimes.com/2022/11/04/arts/television/netflix-the-crown-elizabeth-debicki-dominic-west.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T09:00:37+00:00",
    },
    {
      author: "Alexis Soloski",
      title:
        "For ‘Fleishman Is in Trouble,’ Claire Danes and Jesse Eisenberg Say I Do",
      description:
        "The actors share a doomed union in this new FX series. In a joint interview, they discuss their own marriages and how it felt to depict such a contentious one.",
      url: "https://www.nytimes.com/2022/11/04/arts/television/fleishman-is-in-trouble-claire-danes-jesse-eisenberg.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/06/arts/06fleishman1/06fleishman1-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T09:00:33+00:00",
    },
    {
      author: "Desiree Ibekwe",
      title: "Making a Genre-Bending Show About Social Media and Sex Work",
      description:
        "“Mood,” a BBC America series created by Nicôle Lecky, blends music, comedy and gritty realism to explore the opportunities and risks for young women online.",
      url: "https://www.nytimes.com/2022/11/04/arts/television/mood-nicole-lecky.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/04/arts/04mood1/04mood1-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T13:49:50+00:00",
    },
    {
      author: "Amber Raiken",
      title:
        "Nick Lachey responds to Love Is Blind star Lauren Speed calling out new season",
      description:
        "‘I think that all you can do in terms of being in the show and being in the casting department is casting fairly and with great diversity’",
      url: "https://www.independent.co.uk/life-style/nick-lachey-lauren-speed-love-is-blind-b2217867.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/04/14/newFile-6.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T16:16:26+00:00",
    },
    {
      author: "Wesley Morris",
      title: "Barbra Streisand on Her Early Recordings: ‘That Girl Can Sing’",
      description:
        "“Live at the Bon Soir,” a restored set of songs from November 1962, allows listeners today — and Streisand, herself — to rediscover the sounds of a star being born.",
      url: "https://www.nytimes.com/2022/11/04/arts/music/barbra-streisand-live-at-the-bon-soir.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T17:10:19+00:00",
    },
    {
      author: "Meredith Clark",
      title:
        "Lena Dunham reveals she built her home in her parents’ backyard: ‘Just as I always wanted’",
      description:
        "‘When I was a little kid, I used to dread the idea of ever leaving my parents’ home,’ the actor said",
      url: "https://www.independent.co.uk/life-style/lena-dunham-home-architectural-digest-b2218039.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/04/17/newFile-3.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T18:32:23+00:00",
    },
    {
      author: "Nicole Carpenter",
      title: "A new Pokémon just leaked through Pokémon Go",
      description:
        "The Pokémon previously showed up briefly in a Scarlet and Violet trailer Continue reading&hellip;",
      url: "https://www.polygon.com/pokemon/23440939/pokemon-scarlet-violet-new-coin-leaked-go",
      source: "Polygon",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T18:57:54+00:00",
    },
    {
      author: "Meredith Clark",
      title:
        "Julia Fox tells TikTok she has autism after fans point out her display of random knowledge",
      description: "‘I knew you were one of us,’ said one fan",
      url: "https://www.independent.co.uk/life-style/health-and-families/julia-fox-autism-tiktok-b2218116.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/04/20/newFile-1.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T20:36:27+00:00",
    },
    {
      author: "Neil Genzlinger",
      title: "Douglas McGrath, Playwright, Filmmaker and Actor, Dies at 64",
      description:
        "His one-man Off Broadway show, “Everything’s Fine,” directed by John Lithgow, had opened just weeks ago.",
      url: "https://www.nytimes.com/2022/11/04/theater/douglas-mcgrath-dead.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/05/obituaries/04mcgrath-01-print1/04mcgrath-01-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-04T22:12:58+00:00",
    },
    {
      author: "Catherine Hong",
      title: "Adaptations of ‘Anne of Green Gables’ Are Proliferating",
      description:
        "Suddenly, remakes and adaptations of L.M. Montgomery’s “Anne of Green Gables” series are proliferating.",
      url: "https://www.nytimes.com/2022/11/04/books/review/anne-of-green-gables-reboots.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/13/books/review/13HONG-KIDS/13HONG-KIDS-moth-v2.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-05T01:55:58+00:00",
    },
    {
      author: "Meredith Clark",
      title:
        "Rihanna’s Savage x Fenty fashion show - latest: Here’s what to expect",
      description:
        "Upcoming fashion show sees Depp appear for a ‘star’ moment in the Savage x Fenty campaign",
      url: "https://www.independent.co.uk/life-style/johnny-depp-rihanna-savage-fenty-fashion-show-b2220817.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/08/21/newFile-2.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T21:39:09+00:00",
    },
    {
      author: "Tom Ough",
      title:
        "Why Mike Tindall isn’t afraid of anything, explained by an expert",
      description:
        "While covered in spiders, the retired England rugby champion told his ‘I’m a Celebrity’ teammates that he can control his fear. But is this Zen-like mastering of a base instinct possible for all of us? Tom Ough speaks to a specialist in phobias to find out",
      url: "https://www.independent.co.uk/life-style/health-and-families/mike-tindall-im-a-celebrity-b2220643.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/07/15/iStock-467981846.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T22:21:23+00:00",
    },
    {
      author: "Andrew Crump",
      title: "D.I.Y. Sci-Fi: A Talk With Justin Benson and Aaron Moorhead",
      description:
        "The filmmaking and acting team discuss their latest low-budget science fiction movie, “Something in the Dirt,” and their work on the Marvel Disney+ series “Moon Knight.”",
      url: "https://www.nytimes.com/2022/11/08/movies/something-in-the-dirt-justin-benson-aaron-moorhead-interview.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/09/arts/08benson-moorhead-qa1/08benson-moorhead-qa1-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-08T22:25:11+00:00",
    },
    {
      author: "Thomas Mitchell",
      title: "His loss? Drake sued over fake Vogue magazine cover",
      description:
        "Condé Nast, the publisher of Vogue magazine, is suing rappers Drake and 21 Savage for a magazine cover created as part of a ‘fake’ press tour for their album, Her Loss.",
      url: "https://www.smh.com.au/culture/music/his-loss-drake-sued-over-fake-vogue-magazine-cover-20221109-p5bwos.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$zoom_1.587129563217606%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_639/t_crop_custom/q_86%2Cf_jpg/6918b66dece2a381ae955d676b82396e95a63fa4",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-08T22:54:06+00:00",
    },
    {
      author: "Paul Byrnes",
      title: "Epic visuals in doco’s search for snow leopard",
      description:
        "The Velvet Queen follows two men as they hope to see a snow leopard, but it’s the beautiful visuals that make this a film worth seeing.",
      url: "https://www.theage.com.au/culture/movies/epic-visuals-in-doco-s-search-for-snow-leopard-20221108-p5bwim.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.5963%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_66%2C$y_0/t_crop_custom/q_86%2Cf_jpg/f6497b9f605f64ecfaf2e98f4f85cd26bebc5006",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-09T00:57:32+00:00",
    },
    {
      author: "Sandra Hall",
      title:
        "Joost Bakker doesn’t just build a sustainable house, he builds hope",
      description:
        "This documentary about the designer’s ambitious plan to build a fully recyclable home in Melbourne’s Federation Square should be compulsory viewing.",
      url: "https://www.smh.com.au/culture/movies/joost-bakker-doesnt-just-build-a-sustainable-house-he-builds-hope-20221109-p5bwsd.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$zoom_0.769%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_691%2C$y_521/t_crop_custom/q_86%2Cf_jpg/a03c682402cc245074c903ccc226db91ea280101",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-09T01:48:32+00:00",
    },
    {
      author: "TMZ Staff",
      title:
        "Aaron Carter's Fiancé Moves Her Stuff Out of His Home, Cops Called to Keep Peace",
      description:
        "Aaron Carter's home is bustling with activity a few days after his sudden death -- his fiancé is moving her stuff out, and deputies are there too. Law enforcement sources tell TMZ ... a woman called L.A. County Sheriff's deputies to the late&hellip;",
      url: "https://www.tmz.com/2022/11/08/aaron-carter-fiance-moves-out-melanie-martin-cops-called/",
      source: "TMZ",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-09T01:51:48+00:00",
    },
    {
      author: "Kerrie O'Brien",
      title:
        "Lorde headlines as ‘A Little Life’ hits the stage at Adelaide Festival",
      description:
        "Lorde’s only Australian shows, Hanya Yanagihara’s acclaimed novel adapted for the stage, and Theatre Belarus headline a stunning Adelaide Festival.",
      url: "https://www.theage.com.au/culture/theatre/lorde-headlines-as-a-little-life-hits-the-stage-at-adelaide-festival-20221029-p5bu12.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.4354%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_213/t_crop_custom/q_86%2Cf_jpg/c9e8c516b7f54c9c1c30c67b626abafcbf05fca5",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-09T02:40:53+00:00",
    },
    {
      author: "Chelsea Stark",
      title:
        "The God of War Ragnarök accessibility settings you should try from the start",
      description:
        "Image: Santa Monica Studio/Sony Interactive Entertainment Navigation assist, subtitle tweaks, and lots more Continue reading&hellip;",
      url: "https://www.polygon.com/god-of-war-ragnarok-guide/23447228/accessibility-settings-captions-navigation-assist",
      source: "Polygon",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-09T05:01:00+00:00",
    },
    {
      author: "Ari Notis",
      title: "Don’t sleep on God of War Ragnarök’s powerful modded skills",
      description:
        "Image: Sony/Santa Monica Studio via Polygon How to to apply mod tokens to the Leviathan Axe and Blades of Chaos Continue reading&hellip;",
      url: "https://www.polygon.com/god-of-war-ragnarok-guide/23437260/skill-trees-mod-tokens-kratos-leviathan-axe-blades-of-chaos",
      source: "Polygon",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-09T05:01:00+00:00",
    },
    {
      author: "Vanessa Friedman",
      title: "Giorgia Meloni and the Politics of Power Dressing",
      description:
        "The first female prime minister of Italy can’t avoid people caring about what she wears, but she can use it.",
      url: "https://www.nytimes.com/2022/11/09/style/giorgia-meloni-style.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/09/fashion/09MELONI-STYLE-3/09MELONI-STYLE-3-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-09T10:00:28+00:00",
    },
    {
      author: "",
      title: "Christmas Ads 2022 - Sainsbury's Once Upon a Pud",
      description:
        'The evil Countess who isn\'t a fan of Christmas Pudding "tastes the difference" in the 2022 commercial for the UK supermarket chain.',
      url: "https://www.theage.com.au/lifestyle/christmas-ads-2022-sainsburys-once-upon-a-pud-20221109-p5bwz5.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/7d780e005dcf4896d0990002e9c85056a7e8ad20",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-09T10:39:13+00:00",
    },
    {
      author: "",
      title: "Christmas Ads 2022 - Asda Have your Elf a Merry Christmas",
      description:
        "Will Ferrell's Buddy the Elf has been cleverly edited into this year's Asda Christmas ad.",
      url: "https://www.smh.com.au/lifestyle/christmas-ads-2022-asda-have-your-elf-a-merry-christmas-20221109-p5bwzf.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/4c7597db7c066473bff2ee7b85604e20b44cad69",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-09T10:54:14+00:00",
    },
    {
      author: "",
      title: "Christmas Ads 2022 - Asda Have your Elf a Merry Christmas",
      description:
        "Will Ferrell's Buddy the Elf has been cleverly edited into this year's Asda Christmas ad.",
      url: "https://www.theage.com.au/lifestyle/christmas-ads-2022-asda-have-your-elf-a-merry-christmas-20221109-p5bwzf.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/4c7597db7c066473bff2ee7b85604e20b44cad69",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-09T10:54:14+00:00",
    },
    {
      author: "",
      title: "Christmas Ads 2022 - Katy Perry stars in Lego commercial",
      description:
        "Katy Perry encourages a 'playful holiday' with Lego's latest commercial for the silly season.",
      url: "https://www.smh.com.au/lifestyle/christmas-ads-2022-katy-perry-stars-in-lego-commercial-20221109-p5bwzi.html?ref=rss&utm_medium=rss&utm_source=rss_lifestyle",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/1ac6ed25bf55ff1babae2da9823cc0acbbcacfa6",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-09T10:59:28+00:00",
    },
    {
      author: "Amber Raiken",
      title:
        "Private investigators share five major signs you’re dating a cheater",
      description: "‘They lie about big things and small things’",
      url: "https://www.independent.co.uk/life-style/cheating-dating-signs-private-investigation-b2221305.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/08/25/21/cheating-tiktok-signs.png?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-09T12:37:14+00:00",
    },
    {
      author: "Saman Javed",
      title:
        "Prevalence of dementia in over 65s has declined by a third, study finds",
      description: "Women are more likely to develop dementia than men",
      url: "https://www.independent.co.uk/life-style/health-and-families/dementia-over-65-prevalence-decrease-study-b2221391.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/09/14/newFile.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-09T14:46:22+00:00",
    },
    {
      author: "Laura Hampson",
      title:
        "Laura Jackson says she was followed by a ‘strange man’ after getting London Tube",
      description: "‘I was followed by a really strange man,’ Jackson said",
      url: "https://www.independent.co.uk/life-style/laura-jackson-followed-tube-womens-awards-b2221439.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/09/15/GettyImages-1440069344%20%281%29.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-09T15:16:29+00:00",
    },
    {
      author: "Laura Hampson",
      title:
        "Johnny Depp makes controversial appearance in Rihanna’s Savage X Fenty show",
      description: "Actor was confirmed to be in the lingerie show last week",
      url: "https://www.independent.co.uk/life-style/fashion/johnny-depp-rihanna-savage-x-fenty-show-backlash-b2221139.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/09/09/rihanna%20johnny.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-09T15:38:16+00:00",
    },
    {
      author: "Furvah Shah",
      title:
        "Made in Chelsea's Spencer Matthews says he 'never really processed' brother Michael's death aged 22",
      description:
        "Michael Matthews died in 1999 after becoming the youngest Brit to climb Mount Everest",
      url: "https://www.independent.co.uk/life-style/made-in-chelsea-s-spencer-matthews-brother-death-b2221446.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/07/20/13/GettyImages-453179588.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-09T16:03:18+00:00",
    },
    {
      author: "Charlie Hall",
      title:
        "Star Wars: Shatterpoint is a new miniatures skirmish game from the makers of Legion, X-Wing",
      description:
        "Image: Atomic Mass Games Inspired by ’80s and ’90s Star Wars cartoons Continue reading&hellip;",
      url: "https://www.polygon.com/tabletop-games/23449408/star-wars-shatterpoint-skirmish-game-announcement-release-date-price-atomic-mass",
      source: "Polygon",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-09T17:30:00+00:00",
    },
    {
      author: "Neil Genzlinger",
      title: "Elizabeth Stewart, Champion of Scotland’s Folk Music, Dies at 83",
      description:
        "She was part of a musical family of Scottish Travellers that furthered the nation’s folk revival and influenced its American counterpart.",
      url: "https://www.nytimes.com/2022/11/09/arts/music/elizabeth-stewart-dead.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-09T17:43:19+00:00",
    },
    {
      author: "Matt Patches",
      title:
        "An oral history of Andor’s prison, one of Star Wars’ most frightening creations",
      description:
        "Image: Lucasfilm One way in, one way out Continue reading&hellip;",
      url: "https://www.polygon.com/star-wars/23447904/andor-episode-10-prison-break-toilet-oral-history",
      source: "Polygon",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-09T18:02:00+00:00",
    },
    {
      author: "Susana Polo",
      title:
        "Superman loves his queer son, but it took weeks to figure out how to say it",
      description:
        "Image: Tom Taylor, Cian Tormey/DC Comics How Superman: Son of Kal-El #17 built its historic coming out story Continue reading&hellip;",
      url: "https://www.polygon.com/23447875/superman-son-of-kal-el-coming-out-bisexual-boyfriend",
      source: "Polygon",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-09T18:16:05+00:00",
    },
    {
      author: null,
      title: "I'm A Celebrity: Matt Hancock seen in first Bushtucker Trial",
      description:
        "The MP, criticised for appearing on the show, is seen crawling through a tunnel filled with insects.",
      url: "https://www.bbc.co.uk/news/entertainment-arts-63576972?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Entertainment & Arts",
      image: null,
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-09T19:00:37+00:00",
    },
    {
      author: "Jennifer Schuessler",
      title: "In Search of Enheduanna, History’s First Named Author",
      description:
        "“She Who Wrote,” an exhibition at the Morgan Library, explores the world of an ancient Mesopotamian priestess who wrote with a strikingly personal voice.",
      url: "https://www.nytimes.com/2022/11/09/arts/enheduanna-author-morgan.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/09/arts/09Enheduanna-writer1/09Enheduanna-writer1-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-09T19:26:27+00:00",
    },
    {
      author: null,
      title: "Modern Love Podcast: What to Do With the Time We Get",
      description:
        "A man with a chronic illness savors the time he has with the ones he loves.",
      url: "https://www.nytimes.com/2022/11/09/podcasts/modern-love-the-time-we-get.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2018/03/18/fashion/09modernlove-podcast-image/18MODERNLOVE-moth-v2.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-09T21:11:07+00:00",
    },
    {
      author: "Thomas Mitchell",
      title: "The White Lotus twists the Italian Dream into a nightmare",
      description:
        "Day two of the holiday is always better than day one, right?",
      url: "https://www.theage.com.au/culture/tv-and-radio/the-white-lotus-twists-the-italian-dream-into-a-nightmare-20221107-p5bw9n.html?ref=rss&utm_medium=rss&utm_source=rss_culture",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.16971153846153847%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_110/t_crop_custom/q_86%2Cf_jpg/cf350cc6273026d24f7764b499fd28759eb4e5a3",
      category: "entertainment",
      language: "en",
      country: "au",
      published_at: "2022-11-07T21:52:21+00:00",
    },
    {
      author: "Amber Raiken",
      title:
        "Savage x Fenty Vol 4: How can you watch and when will it be released?",
      description:
        "The show will be streaming worldwide on Amazon on 9 November",
      url: "https://www.independent.co.uk/life-style/rihanna-savage-x-fenty-show-amazon-b2219896.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/07/22/GettyImages-1244255710.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T00:15:49+00:00",
    },
    {
      author: "Meredith Clark",
      title:
        "Rihanna explains why she and A$AP Rocky haven’t shared their son’s name",
      description:
        "Beauty mogul and rapper welcomed their first child together in May",
      url: "https://www.independent.co.uk/life-style/rihanna-asap-rocky-baby-name-b2220044.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/07/17/newFile-2.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T06:35:42+00:00",
    },
    {
      author: "Mee-Lai Stone",
      title:
        "Back to the future: cutting-edge images at Paris Photo – in pictures",
      description:
        "The 25th edition of Paris Photo features cinematic landscapes, abandoned babies and a venture into the world of NFTs Continue reading...",
      url: "https://www.theguardian.com/artanddesign/gallery/2022/nov/08/back-to-the-future-cutting-edge-images-at-paris-photo-in-pictures",
      source: "The Guardian",
      image:
        "https://i.guim.co.uk/img/media/6d80cfbf8594408549095003995191475bc4adf5/0_113_4756_2854/master/4756.jpg?width=140&quality=85&auto=format&fit=max&s=5b2c85735b85d32b408dfc01df7c2aa0",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-08T07:00:44+00:00",
    },
    {
      author: "Trish Bendix",
      title: "Late Night Rates Trump’s New Nickname for Ron DeSantis",
      description:
        "“Trump doesn’t even know what that means,” Jimmy Fallon said after Donald Trump referred to the Florida governor as “Ron DeSanctimonious.”",
      url: "https://www.nytimes.com/2022/11/08/arts/television/late-trump-desantis.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-08T07:04:25+00:00",
    },
    {
      author: "Paul Schrodt",
      title: "Jovan Adepo and Thundercat on Jazz, Superheroes and Ego Death",
      description:
        "Two creative people in two different fields in one wide-ranging conversation. This time: the “Watchmen” actor and the musician.",
      url: "https://www.nytimes.com/2022/11/08/t-magazine/jovan-adepo-thundercat.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-08T10:00:24+00:00",
    },
    {
      author: "Joanna Whitehead",
      title:
        "Cost of living crisis disproportionately impacting ethnic minority workers, claims new study",
      description:
        "Ethnic minority professionals are more likely to borrow money, move in with family members and skip meals due to the cost of living crisis",
      url: "https://www.independent.co.uk/life-style/ethnic-pay-gap-cost-of-living-crisis-b2220157.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/08/09/iStock-1054665100.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T10:04:14+00:00",
    },
    {
      author: "Elisabeth Egan",
      title: "Gabrielle Blair Embraces ‘the Least Sexy Way to Talk About Sex.”",
      description:
        "In her book “Ejaculate Responsibly,” the home renovation guru encourages readers to revisit their thinking about unwanted pregnancies.",
      url: "https://www.nytimes.com/2022/11/08/books/review/ejaculate-responsibly-gabrielle-blair.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-08T10:00:17+00:00",
    },
    {
      author: "Pamela Stephenson Connolly",
      title:
        "I’m 25 and won’t have sex until I’m married. Why can’t I get a man?",
      description:
        "I like kissing and cuddling, but when I tell boyfriends I want to wait before taking things further … that’s the last I see of themI am a 25-year-old woman and have never had sex, as I always wanted to wait until marriage. I have had two short-term boyfriends, but the relationships never went further because I wanted to wait. I explained to them that I found them really attractive and liked cuddling and kissing but neither of them was satisfied with that. They became distant. They seemed to think I wasn’t interested in them (which was not the case – I really loved them). I showed my...",
      url: "https://www.theguardian.com/lifeandstyle/2022/nov/08/im-25-and-wont-have-sex-until-im-married-why-cant-i-get-a-man",
      source: "The Guardian",
      image:
        "https://i.guim.co.uk/img/media/95601c584564d742b34fac53aa0ed6dd1fdd9d08/5_0_8012_4808/master/8012.jpg?width=140&quality=85&auto=format&fit=max&s=833c84baacf501e21b4ca6a9a8ee69b7",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T11:00:21+00:00",
    },
    {
      author: "Louis Lucero II",
      title: "Mahler’s Having a Moment. He’s Got Lydia Tár to Thank for It.",
      description:
        "The Austrian composer’s Symphony No. 5 is the obsession of the conductor played by Cate Blanchett — and of the fans of her latest film.",
      url: "https://www.nytimes.com/2022/11/08/style/tar-mahler-taylor-swift.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/08/fashion/08MAHLER-FIVE-TOP/merlin_216042000_ef74d8b2-88c6-410e-828c-ba5c9078bfc2-moth.jpg",
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-08T12:30:07+00:00",
    },
    {
      author: "",
      title: "6 easy all-inclusive stays for the perfect winter sun break",
      description:
        "What’s better than booking a holiday knowing that when you get there, everything is covered in the cost? From food to drinks, pools to wellness centres, these Saudi resorts have got you sorted",
      url: "https://www.independent.co.uk/travel/holiday-travel-saudi-jeddah-riyadh-dammam-b2127523.html",
      source: "The Independent - Travel",
      image:
        "https://static.independent.co.uk/2022/07/20/15/Al%20Malaki%20Lounge%20Terrace1.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T12:42:55+00:00",
    },
    {
      author: "",
      title:
        "8 sites to pack your camera for: from lunar landscapes to marble villages",
      description:
        "Grab that camera and start snapping: Saudi is bursting with stunning sights just begging for likes, from turquoise blue waters to natural rock formations, ancient architecture and dramatic viewpoints.",
      url: "https://www.independent.co.uk/travel/travel-photography-instagram-sightseeing-saudi-b2127598.html",
      source: "The Independent - Travel",
      image:
        "https://static.independent.co.uk/2022/08/24/15/115_19840.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T12:58:42+00:00",
    },
    {
      author: "",
      title:
        "From haute cuisine to cult street eats: the new foodie capital you need to know about",
      description:
        "From high end gastronomy to cultish street food, the diverse, vibrant Saudi food scene is a reason to travel, and Jeddah is one of its top culinary hotspots. Here are some of the highlights so you can plan your foodventure…",
      url: "https://www.independent.co.uk/travel/travel-food-culture-jeddah-saudi-arabia-b2080098.html",
      source: "The Independent - Travel",
      image:
        "https://static.independent.co.uk/2022/05/18/17/STA-AULA-036_8135.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T13:03:47+00:00",
    },
    {
      author: "Michael McWhertor",
      title: "Marvel Snap’s new season is heavy on Black Panther",
      description:
        "Image: Second Dinner/Nuverse/Marvel T’Challa himself joins the card lineup Continue reading&hellip;",
      url: "https://www.polygon.com/23445839/marvel-snap-season-2-black-panther-new-cards-wakanda-forever",
      source: "Polygon",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-08T14:04:11+00:00",
    },
    {
      author: "Arthur Lubow",
      title: "Jimmy DeSana, Downtown Pioneer and Provocateur, Goes Mainstream",
      description:
        "The photographer moved effortlessly between scenes: No Wave music, performance, queer subcultures, downtown nightlife, the Pictures Generation and mail art.",
      url: "https://www.nytimes.com/2022/11/08/arts/design/jimmy-desana-brooklyn-museum-photographer-nudes.html",
      source: "The New York Times",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-08T14:20:18+00:00",
    },
    {
      author: "Meredith Clark",
      title:
        "Jennifer Lopez defends taking Ben Affleck’s last name after wedding: ‘I don’t think that’s a problem’",
      description:
        "Lopez revealed she took Affleck’s last name following their intimate Las Vegas wedding in July",
      url: "https://www.independent.co.uk/life-style/love-sex/jennifer-lopez-ben-affleck-name-change-b2220534.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/08/15/newFile-1.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T15:31:32+00:00",
    },
    {
      author: "Amber Raiken",
      title:
        "Meghan Markle says the ‘b-word’ is used to describe women who are ‘difficult’",
      description:
        "‘Labelling a woman as a ‘B-word’ or as difficult is often a deflection’ the duchess said in a recent episode of her podcast",
      url: "https://www.independent.co.uk/life-style/royal-family/meghan-markle-archetypes-podcast-latest-b2220566.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/08/15/GettyImages-1053032052.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T16:21:15+00:00",
    },
    {
      author: "Amber Raiken",
      title:
        "Olivia Culpo says she thought she was going to marry ex Nick Jonas: ‘My whole identity was in him’",
      description:
        "‘I had no brand, no money, and I was in love,’ the model recalled about her relationship with Jonas",
      url: "https://www.independent.co.uk/life-style/olivia-culpo-nick-jonas-relationship-b2220657.html",
      source: "The Independent - Life and Style",
      image:
        "https://static.independent.co.uk/2022/11/08/17/newFile.jpg?width=1200&auto=webp",
      category: "entertainment",
      language: "en",
      country: "gb",
      published_at: "2022-11-08T18:03:50+00:00",
    },
    {
      author: "Nicole Carpenter",
      title: "Major Pokémon Scarlet and Violet leaks are in the wild",
      description:
        "Image: Game Freak/The Pokémon Company, Nintendo If you want to avoid spoilers, look away Continue reading&hellip;",
      url: "https://www.polygon.com/pokemon/23444624/pokemon-scarlet-violet-leaks-fuecoco-starter-evolution-spoiler",
      source: "Polygon",
      image: null,
      category: "entertainment",
      language: "en",
      country: "us",
      published_at: "2022-11-08T20:31:36+00:00",
    },
  ],
};

export const health = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 100,
    total: 170,
  },
  data: [
    {
      author: "Scott Miller",
      title: "NLCS: How the Phillies Decided to Travel Home Early",
      description:
        "Despite a recommendation to stay the night in San Diego on Wednesday, Philadelphia’s road-weary players elected to get home as quickly as possible. So far, so good.",
      url: "https://www.nytimes.com/2022/10/22/sports/baseball/philadelphia-phillies-sleep-science.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/22/multimedia/22mlb-nlcs-feature-top-1-e61f/22mlb-nlcs-feature-top-1-e61f-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-22T09:00:18+00:00",
    },
    {
      author: "Dana G. Smith",
      title: "How to Get More Men to Try Therapy",
      description:
        "Mental health experts say that many American men are in crisis. One solution is to convince them that asking for help is a strength, not a weakness.",
      url: "https://www.nytimes.com/2022/12/09/well/mind/men-mental-health-therapy.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/13/well/07WELL-THERAPY-FOR-MEN/07WELL-THERAPY-FOR-MEN-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-09T18:41:18+00:00",
    },
    {
      author: "Roni Caryn Rabin",
      title:
        "Lasik Patients Should Be Warned of Complications, F.D.A. Draft Says",
      description:
        "Draft recommendations by the agency describe dry eyes, visual disturbances and other side effects of the procedure. Surgeons say the benefits are being ignored.",
      url: "https://www.nytimes.com/2022/12/07/health/lasik-injuries-fda.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/06/multimedia/06LASIK-1-ea8b/06LASIK-1-ea8b-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-07T14:57:30+00:00",
    },
    {
      author: "Azeen Ghorayshi",
      title: "Scientists Have Designed a ‘Vagina on a Chip’",
      description:
        "A silicone chip lined with tissue from human donors could help scientists test drug treatments for bacterial infections in the vagina.",
      url: "https://www.nytimes.com/2022/12/08/science/vagina-chip-bacterial-vaginosis.html",
      source: "The New York Times",
      image: null,
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-08T15:00:08+00:00",
    },
    {
      author: "John Leland",
      title: "She Preached Death Without Fear. Could She Practice It?",
      description:
        "Shatzi Weisberger spent years urging others to approach the process of dying with joy and wonder. Then she got cancer.",
      url: "https://www.nytimes.com/2022/12/09/nyregion/shatzi-weisberger-death.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/11/nyregion/11deathlessons-7-da591/11deathlessons-7-da591-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-09T10:00:31+00:00",
    },
    {
      author: "Nicole Stock",
      title:
        "What is Stiff-Person Syndrome? Celine Dion’s Diagnosis, Explained",
      description:
        "Celine Dion canceled her upcoming tour after being diagnosed with this rare neurological condition. Here’s what we know.",
      url: "https://www.nytimes.com/2022/12/08/well/live/stiff-person-syndrome-symptoms-treatment.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/08/well/08Well-CelineStiffPerson/08Well-CelineStiffPerson-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-08T23:57:34+00:00",
    },
    {
      author: null,
      title: "Cwmbran: Man with broken hip taken to hospital tied to plank",
      description:
        "Melvyn Ryan's granddaughter, Nicole Lea, says she was told no ambulances were available.",
      url: "https://www.bbc.co.uk/news/uk-wales-63948640?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-12-13T08:10:25+00:00",
    },
    {
      author: "Jan Hoffman",
      title:
        "Opposition to School Vaccine Mandates Has Grown Significantly, Study Finds",
      description:
        "A third of parents now feel they should be the ones to decide whether to get their children immunized against measles, mumps and other childhood diseases.",
      url: "https://www.nytimes.com/2022/12/16/health/vaccines-public-opinion.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/16/science/16virus-vaccines/16virus-vaccines-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-16T10:00:13+00:00",
    },
    {
      author: "Elisabeth Egan",
      title: "How a Dreaded Holiday Tradition Turned Into the Best One",
      description:
        "Grief and loss may make this time of year difficult, but that pain can lessen with time.",
      url: "https://www.nytimes.com/2022/12/16/well/family/holiday-music-tradition-grief.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/16/well/16Egan-Traditions/16Egan-Traditions-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-16T10:00:11+00:00",
    },
    {
      author: "Jancee Dunn",
      title:
        "Why You Should Record a Family Member’s Voice This Holiday Season",
      description: "You can create an audio time capsule with anyone you love.",
      url: "https://www.nytimes.com/2022/12/15/well/family/family-audio-recording-holidays.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/15/well/15WELL-NL-RECORDING-FAMILY/15WELL-NL-RECORDING-FAMILY-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-16T01:05:06+00:00",
    },
    {
      author: "Knvul Sheikh",
      title: "Can You Get Covid and the Flu at The Same Time?",
      description:
        "It’s possible to get sick with multiple infections at once, but the likelihood is fairly low.",
      url: "https://www.nytimes.com/article/covid-flu-rsv-same-time.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/24/well/24covid-ongoing-covid-flu-same-time/24covid-ongoing-covid-flu-same-time-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-20T19:06:35+00:00",
    },
    {
      author: "Catherine Pearson",
      title: "6 Ways to Strengthen Your Relationships in 2023",
      description:
        "These gems can help you reinforce bonds with friends, family and romantic partners.",
      url: "https://www.nytimes.com/2022/12/29/well/family/relationship-advice-love-friendship-dating.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/30/well/30-EOY-RELATIONSHIPS/30-EOY-RELATIONSHIPS-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-29T18:24:56+00:00",
    },
    {
      author: "Erik Vance",
      title: "12 Workouts to Try in 2023",
      description:
        "This year, resolve to create a stable fitness routine out of whatever you enjoy most.",
      url: "https://www.nytimes.com/2022/12/30/well/workouts-exercises.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/28/multimedia/28WNT-ROUNDUP18-1-1eec/28WNT-ROUNDUP18-1-1eec-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-30T19:21:45+00:00",
    },
    {
      author: "Cindy Kuzma",
      title: "What is a Dynamic Warm-Up and What Exercises Should it Include?",
      description:
        "Instead of stretching, pick a few key moves to properly prepare your body for your workout.",
      url: "https://www.nytimes.com/2023/01/05/well/move/dynamic-warm-up-exercises.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/05/multimedia/05Well-DynamicWarmUp-final-1-11b4/05Well-DynamicWarmUp-final-1-11b4-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-05T16:06:01+00:00",
    },
    {
      author: null,
      title:
        "Do your vitamin and mineral supplements actually do anything? Here's what experts say.",
      description:
        "Do your vitamin and mineral supplements actually do anything? Here's what experts say.",
      url: "https://news.yahoo.com/do-your-vitamin-and-mineral-supplements-actually-do-anything-heres-what-experts-say-155647571.html",
      source: "Yahoo News",
      image:
        "https://s.yimg.com/os/creatr-uploaded-images/2023-01/08f55fd0-8b70-11ed-aff7-513d29cdbdc1",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-03T15:56:47+00:00",
    },
    {
      author: "Jancee Dunn",
      title: "Day 4: Why you should write a ‘living eulogy’",
      description: "Happy people express their gratitude for others.",
      url: "https://www.nytimes.com/2023/01/04/well/gratitude-letter-happiness-challenge.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/04/well/5Well-Chall-Letter/5Well-Chall-Letter-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-05T03:04:03+00:00",
    },
    {
      author: "Karen Paul",
      title: "A Web Between Her Body and Mine",
      description:
        "For decades we connected nearly every day. One terrible moment changed all that.",
      url: "https://www.nytimes.com/2023/01/06/style/modern-love-a-web-between-her-body-and-mine.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/08/fashion/08MODERN-FRIEND/08MODERN-FRIEND-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-09T20:34:38+00:00",
    },
    {
      author: "Dani Blum",
      title: "The Mediterranean Diet Really Is That Good for You. Here’s Why.",
      description:
        "It has become the bedrock of virtuous eating. Experts answer common questions about how it leads to better health.",
      url: "https://www.nytimes.com/2023/01/06/well/eat/mediterranean-diet-health.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/06/multimedia/06WELL-MEDITERRANEAN-DIET-1-eb57/06WELL-MEDITERRANEAN-DIET-1-eb57-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-06T19:53:39+00:00",
    },
    {
      author: "Jancee Dunn",
      title: "Day 6: Don’t cancel those plans",
      description: "If you think you’ll be happier staying home, you’re wrong.",
      url: "https://www.nytimes.com/2023/01/06/well/social-calendar-happiness-challenge.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/10/well/5Well-MakeADate/5Well-MakeADate-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-07T03:46:41+00:00",
    },
    {
      author: "Jancee Dunn",
      title: "¿Cómo mantener la felicidad todo el año?",
      description:
        "Al emprender este reto nos comprometimos a priorizar las relaciones y considerarlas como un componente vital de la salud general. Varios expertos que nos dieron consejos prácticos para este 2023.",
      url: "https://www.nytimes.com/2023/01/10/espanol/como-ser-feliz.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/10/well/08Well-Challenge-WrapUp/08Well-Challenge-WrapUp-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-16T14:49:50+00:00",
    },
    {
      author: "Dana G. Smith",
      title: "A Beginner’s Guide to the Rowing Machine",
      description:
        "Fitness companies have caught on to the fact that these devices deliver an intense full-body workout.",
      url: "https://www.nytimes.com/2022/11/02/well/move/rowing-machine-workout-guide.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/26/multimedia/26WNT-ROWING-WORKOUT5-1-310a/26WNT-ROWING-WORKOUT5-1-310a-moth-v2.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-02T14:45:43+00:00",
    },
    {
      author: "Melinda Wenner Moyer",
      title: "How to Strengthen Your Bones and Reduce Osteoporosis Risk",
      description:
        "A new study predicts hip fractures will nearly double worldwide by 2050. Here’s how to avoid them.",
      url: "https://www.nytimes.com/2022/09/29/well/bone-health-hip-fractures-osteoporosis.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/09/29/well/29well-nl-bone-health-copy/29well-nl-bone-health-copy-moth-v2.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-05T15:25:22+00:00",
    },
    {
      author: "Apoorva Mandavilli",
      title: "U.S. Health Officials Urge Vigilance as Ebola Spreads in Uganda",
      description:
        "There are no cases in the United States, but the C.D.C. wants doctors to be on the alert for patients with telltale symptoms.",
      url: "https://www.nytimes.com/2022/10/06/health/ebola-cdc-uganda.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/05/science/05EBOLA1/05EBOLA1-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-06T15:38:11+00:00",
    },
    {
      author: "Catherine Pearson",
      title: "Tell Us About Your Friends",
      description:
        "Platonic relationships are unsung — and essential. The Times wants to hear about the meaningful friendships in your life and how you’ve maintained them.",
      url: "https://www.nytimes.com/2022/11/14/well/friendship-callout.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/10/well/WELL-FRIENDSHIP-CALLOUT1/WELL-FRIENDSHIP-CALLOUT1-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-14T17:23:43+00:00",
    },
    {
      author: "Paula Span",
      title: "‘A New Frontier’ for Hearing Aids",
      description:
        "Over-the-counter hearing aids are coming at long last. But lower prices and greater accessibility may take time to materialize.",
      url: "https://www.nytimes.com/2022/10/10/health/hearing-aids-fda.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/11/science/11SPAN-otc-hearing-aids/11SPAN-otc-hearing-aids-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-10T15:29:34+00:00",
    },
    {
      author: "Dani Blum and Andrea Chronopoulos",
      title: "What Are Your ‘Non-Negotiables’? Readers Share Wellness Rituals",
      description:
        "Reading Nancy Drew. Watching the birds every day. Counting yellow doors. Thousands of Times readers shared their wellness “non-negotiables.”",
      url: "https://www.nytimes.com/2022/10/08/well/live/wellness-rituals.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/07/well/07Well-NonNegotiables-06/07Well-NonNegotiables-06-moth-v2.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-12T18:45:44+00:00",
    },
    {
      author: "Ellen Barry",
      title: "Sadder but Wiser? Maybe Not.",
      description:
        "A landmark 1979 study found that depressed people had a more realistic view of their influence over events. New research calls that into question.",
      url: "https://www.nytimes.com/2022/10/18/health/depressive-realism-theory.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/18/science/18SCI-DEPRESSION/18SCI-DEPRESSION-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-18T07:00:08+00:00",
    },
    {
      author: null,
      title: "The puzzle of UK’s half a million missing workers",
      description:
        "The number out of work through ill health has been rising sharply - and no-one is really sure why.",
      url: "https://www.bbc.co.uk/news/health-63625989?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-11-23T13:00:22+00:00",
    },
    {
      author: "The Well Desk and Tony Cenicola/the New York Times",
      title: "28 Wellness Gifts for Better Health and Self-Care",
      description:
        "Looking for the perfect present? We’ve got 28 ways to keep your loved ones healthy and happy.",
      url: "https://www.nytimes.com/2022/11/21/well/wellness-holiday-gifts.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/22/multimedia/22WELL-GIFTGUIDE32-1-d2cc/22WELL-GIFTGUIDE32-1-d2cc-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-21T19:39:01+00:00",
    },
    {
      author: null,
      title: "Ebola in Uganda: The people spreading misinformation online",
      description:
        "Some Ugandans have been attacking the government's efforts, even denying the Ebola virus's existence.",
      url: "https://www.bbc.co.uk/news/63741125?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-11-29T01:20:35+00:00",
    },
    {
      author: "Sam Roberts",
      title:
        "Michael Pertschuk, Antismoking and Auto Safety Crusader, Dies at 89",
      description:
        "As an obscure but muscular congressional staffer and chairman of the Federal Trade Commission, he helped usher into law a raft of consumer protections.",
      url: "https://www.nytimes.com/2022/11/29/us/michael-pertschuk-dead.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/29/multimedia/29pertschuk-01/29pertschuk-01-1-4c6d-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-29T21:43:31+00:00",
    },
    {
      author: "Dani Blum",
      title:
        "Holiday Drinking Can Hurt Your Heart. Here Are Tips to Stay Healthy.",
      description:
        "December is peak time for cardiovascular issues. Here’s how to stay safe.",
      url: "https://www.nytimes.com/2022/12/01/well/holiday-heart-health-risks-drinking.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/06/well/1Well-NL-HolidayHeart/1Well-NL-HolidayHeart-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-02T14:39:10+00:00",
    },
    {
      author: "Sophie Egan",
      title: "10 Nutrition Myths Experts Wish Would Die",
      description:
        "We surveyed some of the country’s leading authorities to reveal the truth about fat, dairy, soy and more.",
      url: "https://www.nytimes.com/2023/01/19/well/eat/nutrition-myths.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/19/well/19NUTRITION-MYTHS/19NUTRITION-MYTHS-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-19T16:32:32+00:00",
    },
    {
      author: "Alisha Haridasani Gupta",
      title: "What to Know About PFAS in Thinx and Other Period Underwear",
      description:
        "Thinx just settled a lawsuit alleging its products contain harmful chemical compounds, raising further questions about the safety of period products overall.",
      url: "https://www.nytimes.com/2023/01/20/well/pfas-thinx-period-underwear.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/19/well/Period-Products-PFAS1/Period-Products-PFAS1-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-20T21:05:41+00:00",
    },
    {
      author: null,
      title: "'I've been given a do not resuscitate order but I want to live'",
      description:
        "Marie McLean is scared to go to sleep after discovering her records tell medics not to attempt CPR.",
      url: "https://www.bbc.co.uk/news/uk-scotland-glasgow-west-64334328?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2023-01-21T09:20:15+00:00",
    },
    {
      author: "Lisa Fogarty",
      title: "Surf and the City",
      description:
        "Autumn may be the season of big swells, but the smaller waves found year-round near East Coast cities are perfect for beginners who want to give surfing a try.",
      url: "https://www.nytimes.com/2022/10/05/well/move/urban-surfing-cities.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/09/28/well/28URBAN-SURFING1/merlin_213876087_185412a5-b374-4c71-bf8b-6fd43ba4db8b-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-05T20:22:30+00:00",
    },
    {
      author: null,
      title:
        "Abortion: Western Trust sorry for further delay to early medical service",
      description:
        "The Western Trust says it is now working towards restarting its early medical abortion clinic this month.",
      url: "https://www.bbc.co.uk/news/uk-northern-ireland-63122472?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-10-04T10:11:28+00:00",
    },
    {
      author: "Dawn MacKeen",
      title: "Can New Technology Make Home Dialysis a More Realistic Option?",
      description:
        "The Tablo System promises to make dialysis easier and more convenient for patients. But there are significant barriers to the technology.",
      url: "https://www.nytimes.com/2022/11/10/business/home-dialysis-tablo-outset.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/10/arts/10upstart-outset-1/10upstart-outset-1-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-10T10:00:41+00:00",
    },
    {
      author: "Danielle Friedman",
      title:
        "Strength Training Beginners Guide: How to Make the Workout a Habit",
      description: "For real this time.",
      url: "https://www.nytimes.com/2022/10/12/well/move/strength-training-beginners-guide.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/03/well/STRENGTH-TRAINING-BEGINNERS5/STRENGTH-TRAINING-BEGINNERS5-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-12T09:00:30+00:00",
    },
    {
      author: "Trisha Pasricha",
      title: "Ate Too Much at Thanksgiving Dinner? How to Soothe Your Stomach.",
      description:
        "A gastroenterologist explains how to manage symptoms like bloating, gas and heartburn during the biggest food holiday of the year.",
      url: "https://www.nytimes.com/2022/11/22/well/eat/thanksgiving-dinner-overeating-relief.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/29/multimedia/22ASKWELL-GI-DISTRESS2-1-d427/22ASKWELL-GI-DISTRESS2-1-d427-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-24T14:28:18+00:00",
    },
    {
      author: "Shea Tuttle",
      title: "After Covid, Playing Trumpet Taught Me How to Breathe Again",
      description: "The benefits of group (music) therapy.",
      url: "https://www.nytimes.com/2022/11/29/magazine/community-band.html",
      source: "The New York Times",
      image: null,
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-29T14:49:27+00:00",
    },
    {
      author: null,
      title: "Host of top hospitals targeted by nurse strikes",
      description:
        "Cancer centres and children's hospitals among services affected by 15 and 20 December walkouts.",
      url: "https://www.bbc.co.uk/news/health-63799244?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-11-29T16:51:48+00:00",
    },
    {
      author: "Danielle Friedman",
      title: "Exercises to Help You Ease Holiday Stress",
      description:
        "These easy fitness strategies will help keep your spirits up.",
      url: "https://www.nytimes.com/2022/12/02/well/move/holiday-stress-exercise.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/01/well/2Well-HolidayExercise/2Well-HolidayExercise-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-02T15:56:18+00:00",
    },
    {
      author: "Amanda Loudin",
      title: "In-Line Skating is Back — Again",
      description:
        "Once you’re up to speed on the basics, getting outside on Rollerblades is a surprisingly good workout.",
      url: "https://www.nytimes.com/2022/10/19/well/move/rollerblading-benefits-basics.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/19/multimedia/19WNT-INLINE-SKATING3-1-2759/19WNT-INLINE-SKATING3-1-2759-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-19T09:00:38+00:00",
    },
    {
      author: "Knvul Sheikh",
      title: "How to Spot Flu Symptoms in Children",
      description:
        "This year’s influenza season looks to be particularly bad. We asked doctors what parents need to know about the virus — and need to recognize when things turn serious.",
      url: "https://www.nytimes.com/2022/12/05/well/family/flu-symptoms-children.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/05/well/05WELL-CHILDREN-FLU1/05WELL-CHILDREN-FLU1-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-05T14:48:05+00:00",
    },
    {
      author: null,
      title: "Endometriosis surgery delay 'caused irreversible damage'",
      description:
        "Claire Nicholls says her reproductive organs are so damaged, it has affected her ability to have children.",
      url: "https://www.bbc.co.uk/news/uk-northern-ireland-63375713?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-10-25T07:10:38+00:00",
    },
    {
      author: null,
      title: "Concern over flu and RSV as Covid stays level",
      description:
        "The flu season has started early and some young children under five are ending up in hospital.",
      url: "https://www.bbc.co.uk/news/health-63427651?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-10-28T12:35:36+00:00",
    },
    {
      author: "Catherine Pearson",
      title: "How to Help Someone With Depression",
      description:
        "Whether they are coping with seasonal symptoms or chronic depression, here’s how to offer love and understanding while still caring for yourself.",
      url: "https://www.nytimes.com/2022/10/27/well/family/depression-support.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/26/well/26Well-DepressedPartner/26Well-DepressedPartner-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-27T17:36:14+00:00",
    },
    {
      author: "Apoorva Mandavilli",
      title: "Scientists Are Gaining On RSV, a Persistent Threat to Children",
      description:
        "Vaccines and treatments are in trials, but the virus remains a leading killer of infants worldwide.",
      url: "https://www.nytimes.com/2022/11/01/health/rsv-children-vaccines.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/01/world/01rsv/01rsv-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-01T12:38:49+00:00",
    },
    {
      author: "Dani Blum",
      title: "How to Stay Safe During a Crowded Event",
      description:
        "While tragedies such as the deaths of 151 people at a Halloween event in Seoul are rare, anyone attending a big gathering should keep these safety tips in mind, experts say.",
      url: "https://www.nytimes.com/article/crowd-crush-safety.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/31/well/WELL-CROWD-CRUSH1/WELL-CROWD-CRUSH1-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-01T15:44:25+00:00",
    },
    {
      author: null,
      title: "Benefit cuts for disabled people in hospital called unfair",
      description:
        "At least 45,000 disabled people affected this year by so-called hospitalisation rule.",
      url: "https://www.bbc.co.uk/news/uk-63036042?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-11-02T10:45:37+00:00",
    },
    {
      author: "Dan Gordon and Carla Denly",
      title:
        "UCLA Fielding School of Public Health to offer undergraduate degrees",
      description:
        "Students can begin applying for the new degree program in spring 2023.",
      url: "https://newsroom.ucla.edu/releases/ucla-fielding-school-of-public-health-to-offer-undergraduate-degrees",
      source: "University of California",
      image: "",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-03T21:01:00+00:00",
    },
    {
      author: "Melinda Wenner Moyer",
      title: "How to Be Bored, and What You Can Learn From It",
      description:
        "Figuring out the root cause of our lack of inspiration can help us make better choices in how we spend our time, experts say.",
      url: "https://www.nytimes.com/2022/11/03/well/boredom-inspiration-mindfulness.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/03/well/03Well-NL-Boredom/03Well-NL-Boredom-moth-v2.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-04T00:15:47+00:00",
    },
    {
      author: "Paula Span",
      title: "Medicare Advantage or Just Medicare?",
      description:
        "It’s annual enrollment season once again. Here’s a look at the pros and cons of the two approaches to health insurance.",
      url: "https://www.nytimes.com/2022/11/05/health/medicare-seniors-health.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/08/science/00SCI-SPAN-MEDICARE/00SCI-SPAN-MEDICARE-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-05T11:49:19+00:00",
    },
    {
      author: "Dani Blum",
      title: "2-Minute Exercise Bursts Can Have Big Health Benefits",
      description:
        "A new study confirms that you don’t have to do a hard workout to reap the longevity rewards of exercise.",
      url: "https://www.nytimes.com/2022/12/08/well/move/exercise-bursts-benefits.html",
      source: "The New York Times",
      image: null,
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-08T16:13:23+00:00",
    },
    {
      author: "Hilary Achauer",
      title: "Can You Pass the Flexibility Test?",
      description:
        "Having a good range of motion is essential for athletics as well as everyday life.",
      url: "https://www.nytimes.com/2022/12/09/well/move/flexibility-test-mobility-fitness.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/01/08/multimedia/08WELL-FLEXIBILITY-TESTS11-1-bf55/08WELL-FLEXIBILITY-TESTS11-1-bf55-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-09T18:56:31+00:00",
    },
    {
      author: "Dana G. Smith",
      title: "What is ‘Task Paralysis’? And How to Overcome it.",
      description:
        "Your brain can see your to-do list as a threat. Here’s how to get things done anyway.",
      url: "https://www.nytimes.com/2022/12/12/well/mind/task-paralysis.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/12/well/12Well-TaskParalysis/12Well-TaskParalysis-moth.png",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-13T17:11:20+00:00",
    },
    {
      author: "Dana G. Smith",
      title: "Amid a ‘Tripledemic,’ It’s Time to Mask Up Again, Experts Say",
      description:
        "A high-quality, well-fitting mask is your best protection against infection from the coronavirus, influenza and R.S.V.",
      url: "https://www.nytimes.com/2022/12/13/well/covid-flu-rsv-masks-tripledemic.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/13/multimedia/13MASKS-TRIPLEDEMIC2-1-d616/13MASKS-TRIPLEDEMIC2-1-d616-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-13T18:05:38+00:00",
    },
    {
      author: "Tariro Mzezewa",
      title:
        "The ‘Tripledemic’ Holiday: How to Fly More Safely (Hint: Wear a Mask)",
      description:
        "Case counts of Covid, the flu and R.S.V. are ticking up. Here’s what you need to know if you’re planning on flying during the holiday season.",
      url: "https://www.nytimes.com/2022/12/19/travel/covid-flu-rsv-travel-safety.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/19/multimedia/19-covid-travel-explainer-1-0e31/19-covid-travel-explainer-1-0e31-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-19T21:39:30+00:00",
    },
    {
      author: null,
      title: "Watch: On the picket line with nurses across the UK",
      description:
        "Nurses in Northern Ireland, Wales and England stage industrial action, calling for fair pay.",
      url: "https://www.bbc.co.uk/news/uk-64041760?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-12-20T13:31:46+00:00",
    },
    {
      author: "Miya Lee and Daniel Jones",
      title: "Tell Us About Your Strangest Terms of Endearment",
      description:
        "Do you have a surprising pet name for your loved ones? When you were young, were you called something bizarre? Tell us about it.",
      url: "https://www.nytimes.com/2023/01/05/style/tell-us-about-your-strangest-terms-of-endearment.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/05/fashion/05NICKNAME-CALLOUT/05NICKNAME-CALLOUT-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-05T18:23:42+00:00",
    },
    {
      author: null,
      title: "Tiny Love Stories: ‘A Wife Who Left’",
      description:
        "Modern Love in miniature, featuring reader-submitted stories of no more than 100 words.",
      url: "https://www.nytimes.com/2023/01/03/style/tiny-modern-love-stories-a-wife-who-left.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/08/fashion/00JAN-ML-TLS-6/00JAN-ML-TLS-6-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-03T20:05:27+00:00",
    },
    {
      author: null,
      title: "What is known about new Covid variant XBB.1.5?",
      description:
        "The latest Omicron variant is making scientists take notice in the US - so what do you need to know?",
      url: "https://www.bbc.co.uk/news/health-64164306?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2023-01-10T09:52:55+00:00",
    },
    {
      author: "Dana G. Smith",
      title: "Concentration Tips: How to Focus Like It’s 1990",
      description:
        "Smartphones, pings and Insta-everything have shortened our attention spans. Get some old-school concentration back with these tips.",
      url: "https://www.nytimes.com/2023/01/09/well/mind/concentration-focus-distraction.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/09/well/09Well-DigitalDistraction/09Well-DigitalDistraction-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-09T16:38:09+00:00",
    },
    {
      author: null,
      title:
        "Care worker shortage: Woman 'appalled' by lack of support for dying mum",
      description:
        "Cathy's mum Maureen suffered multiple falls after a care-worker shortage left her to struggle on her own.",
      url: "https://www.bbc.co.uk/news/uk-63177547?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-10-11T10:01:23+00:00",
    },
    {
      author: "Rachel Strugatz",
      title: "Should You Be ‘Skin Cycling’?",
      description:
        "A newly popular approach to applying beauty products suggests that skin may benefit from fallow days and rotating chemicals.",
      url: "https://www.nytimes.com/2022/10/06/style/skin-cycling.html",
      source: "The New York Times",
      image: null,
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-09T14:29:19+00:00",
    },
    {
      author: "Susanne Parker Loelius",
      title: "To Find Love, Rub the (Bronze) Bulge",
      description:
        "Groping a statue seemed a little odd, but entire tour groups were doing it, so I did too. And voilà!",
      url: "https://www.nytimes.com/2022/10/07/style/modern-love-for-good-luck-in-love-rub-the-bronze-bulge.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/09/fashion/09MODERN-STATUE/09MODERN-STATUE-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-07T14:23:06+00:00",
    },
    {
      author: "Gina Siddiqui",
      title: "Lessons From a ‘Difficult Patient’",
      description:
        "Sal was the kind of patient that doctors strive to avoid. But for one medical student, he provided an education in compassion.",
      url: "https://www.nytimes.com/2022/10/18/health/doctor-patient-medical-school.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/18/science/18-essay-sal-doc/18-essay-sal-doc-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-18T07:00:10+00:00",
    },
    {
      author: "Jen A. Miller",
      title: "Quitting Smoking: Can E-Cigarettes Help?",
      description: "Here’s what the evidence suggests.",
      url: "https://www.nytimes.com/2022/10/19/well/e-cigarettes-quit-smoking.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/18/multimedia/18ASKWELL-ECIGS1-1-db9e/18ASKWELL-ECIGS1-1-db9e-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-19T09:00:22+00:00",
    },
    {
      author: "Alisha Haridasani Gupta",
      title: "Cultural Bereavement: Naming the Grief Refugees May Feel",
      description:
        "There is a name for the specific type of grief that both refugees and migrants experience. It’s called “cultural bereavement.”",
      url: "https://www.nytimes.com/2022/10/22/well/family/bereavement-culture-refugee-immigrant.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/06/well/06WELL-CULTURAL-BEREAVEMENT3/06WELL-CULTURAL-BEREAVEMENT3-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-22T09:00:39+00:00",
    },
    {
      author: "Carl Zimmer and Benjamin Mueller",
      title:
        "Lab Manipulations of Covid Virus Fall Under Murky Government Rules",
      description:
        "Mouse experiments at Boston University have spotlighted an ambiguous U.S. policy for research on potentially dangerous pathogens.",
      url: "https://www.nytimes.com/2022/10/22/science/covid-virus-laboratory-experiments.html",
      source: "The New York Times",
      image: null,
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-22T09:00:24+00:00",
    },
    {
      author: "Dani Blum",
      title: "What is Creatine? Understanding its Benefits and Side Effects",
      description: "The supplement isn’t just for body builders, doctors said.",
      url: "https://www.nytimes.com/2022/10/24/well/eat/creatine-supplement-benefits-side-effects.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/18/well/WELL-CREATINE1/WELL-CREATINE1-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-24T19:20:06+00:00",
    },
    {
      author: "Knvul Sheikh",
      title: "RSV: What to Know About Symptoms, Transmission and Treatment",
      description:
        "Before the Covid pandemic, most people caught respiratory syncytial virus before the age of 2. Now things have changed.",
      url: "https://www.nytimes.com/article/rsv-symptoms-treatment.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/28/well/28WELL-RSV-EXPLAINER1/28WELL-RSV-EXPLAINER1-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-29T09:00:19+00:00",
    },
    {
      author: "Holly Burns",
      title: "How to Prepare for Daylight Saving Time",
      description:
        "Earlier mornings and shorter evening light can be a tough to adjustment. But there are ways to prepare for the end of daylight saving.",
      url: "https://www.nytimes.com/article/daylight-saving-time-preparation.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/26/well/26-Fall-Daylight-Savings-Advice/26-Fall-Daylight-Savings-Advice-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-10-26T14:52:44+00:00",
    },
    {
      author: "Knvul Sheikh",
      title:
        "How Immunocompromised Experts Will Celebrate Another Pandemic Holiday",
      description:
        "Covid precautions have fallen by the wayside for many. But for the most vulnerable, risks are still front and center.",
      url: "https://www.nytimes.com/2022/11/22/well/immunocompromised-holiday-travel-pandemic.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/22/well/22Well-Immunocomp/22Well-Immunocomp-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-22T23:39:31+00:00",
    },
    {
      author: "Juli Fraga",
      title: "What is Freudenfreude? And How to Cultivate It.",
      description:
        "The joy we derive from others’ success comes with many benefits.",
      url: "https://www.nytimes.com/2022/11/25/well/mind/schadenfreude-freudenfreude.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/25/well/25FREUDENFREUDE/25FREUDENFREUDE-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-25T10:00:04+00:00",
    },
    {
      author: null,
      title: "Matt Hancock to stand down at next election",
      description:
        "The former health secretary was suspended as a Conservative MP after taking part in I'm A Celebrity.",
      url: "https://www.bbc.co.uk/news/uk-politics-63891100?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-12-07T14:50:35+00:00",
    },
    {
      author: null,
      title: "Ambulance staff to strike on 21 December",
      description:
        "Paramedics and support staff in nearly all the services in England and Wales to take part.",
      url: "https://www.bbc.co.uk/news/health-63873505?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-12-06T12:01:55+00:00",
    },
    {
      author: "Dani Blum",
      title: "Paxlovid Rebound: What to Watch For and Should You be Worried",
      description:
        "Some people who had taken the antiviral medication experienced a recurrence of Covid symptoms after their infection appeared to have cleared up.",
      url: "https://www.nytimes.com/2022/12/13/well/live/paxlovid-rebound.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/24/multimedia/24covid-ongoing-paxlovid-rebound1-1-a6c8/24covid-ongoing-paxlovid-rebound1-1-a6c8-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-13T17:57:19+00:00",
    },
    {
      author: null,
      title: "Cancer mRNA vaccine completes pivotal trial",
      description:
        "The under-development cancer jab uses the messenger-RNA technology first used in Covid-19 vaccines.",
      url: "https://www.bbc.co.uk/news/health-63959843?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-12-13T15:00:55+00:00",
    },
    {
      author: "Emily Baumgaertner",
      title: "As Covid Deaths Climb, Even Seniors Skip the Latest Booster",
      description:
        "Nearly all Americans over 65 got their initial Covid vaccines. But that immunity is waning, and this time, the government is offering far less support for new shots.",
      url: "https://www.nytimes.com/2022/12/21/health/covid-bivalent-booster-elderly.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/19/multimedia/00COVID-ELDERLY-1-2254/00COVID-ELDERLY-1-2254-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-21T08:00:12+00:00",
    },
    {
      author: null,
      title: "Ambulance strike: Health bosses warn of patient safety risk",
      description:
        'People are being asked to use services "wisely" and only call 999 in a life-threatening emergency.',
      url: "https://www.bbc.co.uk/news/health-64037468?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-12-20T18:13:34+00:00",
    },
    {
      author: null,
      title: "Strike: What will ambulances respond to on Wednesday?",
      description:
        "What you need to know about emergency care during the ambulance strike.",
      url: "https://www.bbc.co.uk/news/health-64037440?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2022-12-20T13:41:06+00:00",
    },
    {
      author: "Roni Caryn Rabin",
      title:
        "Homicides of Children Soared in the Pandemic’s First Year, CDC Reports",
      description:
        "Killings of children and teenagers under 18 increased sharply in 2020, federal researchers reported. Black communities were disproportionately affected.",
      url: "https://www.nytimes.com/2022/12/19/health/gun-deaths-children-covid.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/19/science/19children-guns/19children-guns-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-19T19:09:11+00:00",
    },
    {
      author: "Catherine Pearson",
      title: "How to Manage Holiday Loneliness",
      description:
        "Whether you’re physically apart from your loved ones or feeling isolated in a sea of friends and family, these strategies can help.",
      url: "https://www.nytimes.com/2022/12/20/well/family/holiday-loneliness.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/09/well/09Well-Holiday-Loneliness/09Well-Holiday-Loneliness-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-20T10:00:12+00:00",
    },
    {
      author: "Dani Blum",
      title: "Are Protein Bars Good for You? What to Know About Nutrition.",
      description:
        "Many of these ubiquitous snacks market themselves as health-savvy options. But how healthy are they?",
      url: "https://www.nytimes.com/2023/01/12/well/eat/protein-bars.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/11/multimedia/11WELL-PROTEIN-BARS1-bhcj/11WELL-PROTEIN-BARS1-bhcj-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-12T16:07:51+00:00",
    },
    {
      author: "Dani Blum",
      title: "How Bad Is It to Share Lip Products?",
      description:
        "In Prince Harry’s new memoir, he describes a moment when Meghan Markle borrowed some lip gloss from Kate. Experts weigh in on whether that’s hygienic.",
      url: "https://www.nytimes.com/2023/01/12/well/lip-products-germs.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/12/multimedia/ASK-WELL-LIP-GERMS1-gmzq/ASK-WELL-LIP-GERMS1-gmzq-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-12T20:51:55+00:00",
    },
    {
      author: "Dani Blum",
      title: "Plantar Fasciitis: Tiger Woods’s Foot Condition, Explained",
      description:
        "Tiger Woods announced he has the common foot condition. Here’s what to know about symptoms, treatment and prevention.",
      url: "https://www.nytimes.com/2022/11/30/well/planter-fasciitis-symptoms-treatment-prevention.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/30/well/WELL-PLANTAR-FASCIITIS3/WELL-PLANTAR-FASCIITIS3-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-11-30T16:52:17+00:00",
    },
    {
      author: "Cindy Kuzma",
      title: "How to Prevent Shoulder Injury",
      description:
        "Shoulder pain can make your days more challenging and keep you up at night. Ward it off with a few smart exercise habits.",
      url: "https://www.nytimes.com/2022/12/29/well/move/shoulder-injury-prevention.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/03/multimedia/21WELL-SHOULDER-INJURY-PREVENTION1-1-25ba/21WELL-SHOULDER-INJURY-PREVENTION1-1-25ba-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-29T17:17:19+00:00",
    },
    {
      author: "Dani Blum",
      title: "9 Nutrition Tips for the New Year",
      description:
        "This simple and surprising advice will help you have a healthy 2023.",
      url: "https://www.nytimes.com/2022/12/28/well/food-nutrition-advice.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/29/well/29WELL-EOY-NUTRITION/29WELL-EOY-NUTRITION-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-28T23:55:23+00:00",
    },
    {
      author: null,
      title: "Covid and flu putting massive pressure on NHS - health secretary",
      description:
        "The health secretary blames the pandemic and flu for NHS pressures, but insists government has right plan.",
      url: "https://www.bbc.co.uk/news/health-64151557?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2023-01-03T22:40:04+00:00",
    },
    {
      author: "Jancee Dunn",
      title: "Day 2: The Secret Power of the 8-Minute Phone Call",
      description:
        "Even a brief chat has measurable effects on our well-being.",
      url: "https://www.nytimes.com/2023/01/02/well/phone-call-happiness-challenge.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/03/well/03Well-Day2Chall/03Well-Day2Chall-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-03T02:21:21+00:00",
    },
    {
      author: "Kwame Anthony Appiah",
      title: "I’m a Cancer Survivor. Should I Tell My Matchmaking Service?",
      description:
        "The magazine’s Ethicist columnist on disclosing personal information when dating.",
      url: "https://www.nytimes.com/2023/01/04/magazine/cancer-matchmaking-ethics.html",
      source: "The New York Times",
      image: null,
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-04T10:02:08+00:00",
    },
    {
      author: null,
      title: "Sign Up for Well’s 7-Day Happiness Challenge",
      description: "Set yourself up for a more fulfilled, connected 2023.",
      url: "https://www.nytimes.com/2022/12/28/well/mind/signup-happiness-challenge.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/03/well/27Well-ChallengeSignUp/27Well-ChallengeSignUp-moth-v2.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-04T16:20:52+00:00",
    },
    {
      author: null,
      title: "Junior doctor strike warning for March",
      description:
        "Members of a union for doctors are to be balloted over a 72-hour walkout in March in England.",
      url: "https://www.bbc.co.uk/news/health-64176039?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Health",
      image: null,
      category: "health",
      language: "en",
      country: "gb",
      published_at: "2023-01-06T10:00:36+00:00",
    },
    {
      author: "The New York Times Books Staff",
      title: "What Are Your Reading Goals for 2023?",
      description:
        "Maybe there’s an author you’ve always wanted to read. Or maybe this is the year you actually finish “The Power Broker.” Tell us about it.",
      url: "https://www.nytimes.com/2023/01/06/books/reading-goals-2023.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/07/multimedia/07readingchallenge-1-69b4/07readingchallenge-1-69b4-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-07T00:47:25+00:00",
    },
    {
      author: "Dana G. Smith",
      title: "Even a Little Alcohol Can Harm Your Health, Research Shows",
      description:
        "Recent research makes it clear that any amount of drinking can be detrimental. Here’s why you may want to cut down on your consumption beyond Dry January.",
      url: "https://www.nytimes.com/2023/01/13/well/mind/alcohol-health-effects.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/13/well/13Well-Alcohol/13Well-Alcohol-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-13T16:16:19+00:00",
    },
    {
      author: "Rachel Fairbank",
      title: "You Can Do This 10-Minute Workout at Home With No Equipment",
      description: "Build strength and mobility anywhere, anytime.",
      url: "https://www.nytimes.com/2023/01/11/well/move/bodyweight-strength-workout.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2023/01/11/multimedia/11BODYWEIGHT-STRENGTH-TRAINING10-wjvb/11BODYWEIGHT-STRENGTH-TRAINING10-wjvb-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2023-01-11T10:00:32+00:00",
    },
    {
      author: "Rachel Rabkin Peachman",
      title: "Why Do Men Grow Nose and Ear Hair?",
      description: "Dangling nose hairs, spiky ear hairs — what gives?",
      url: "https://www.nytimes.com/2022/12/13/well/live/men-nose-ear-hair.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/13/multimedia/13ASKWELL-MAN-HAIRS1-1-846b/13ASKWELL-MAN-HAIRS1-1-846b-moth.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-13T10:00:19+00:00",
    },
    {
      author: "Jancee Dunn",
      title: "How to Fend Off Holiday Stress, from People Who Should Know",
      description:
        "A UPS driver, a baker and Santa’s helper share advice for staying present through the season.",
      url: "https://www.nytimes.com/2022/12/08/well/mind/holiday-stress-relief.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/12/08/well/08-NL-HOLIDAYSTRESS/08-NL-HOLIDAYSTRESS-moth-v3.jpg",
      category: "health",
      language: "en",
      country: "us",
      published_at: "2022-12-10T02:45:24+00:00",
    },
  ],
};

export const science = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 100,
    total: 7050,
  },
  data: [
    {
      author: null,
      title:
        "Large tortoises lived in South Africa long ago: How we recorded their fast-disappearing traces",
      description:
        'In 1835 Charles Darwin, the father of the theory of evolution, was exploring an island in the Galápagos archipelago when he encountered "two large tortoises, each of which must have weighed at least two hundred pounds". He had never seen anything like them. He became entranced by the animals and took at least one back to England as a pet.',
      url: "https://phys.org/news/2022-11-large-tortoises-south-africa-fast-disappearing.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/large-tortoises-lived.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-02T16:30:01+00:00",
    },
    {
      author: null,
      title: "Has the iconic Western red cedar reached a tipping point?",
      description:
        "Six years have passed since Bruce Albert witnessed the sudden, inexplicable death of a dozen Western red cedars on his property.",
      url: "https://phys.org/news/2022-11-iconic-western-red-cedar.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/has-this-iconic-northw.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-02T17:30:01+00:00",
    },
    {
      author: null,
      title:
        "Cellular mechanisms explain differences in hare species' biology and help to understand their evolution",
      description:
        "Researchers from the University of Eastern Finland and Tampere University have published in the journal Molecular Ecology a comprehensive study on the significance of species differences for the most central cell maintenance mechanisms. The researchers used the brown hare (Lepus europaeus) and the mountain hare (Lepus timidus) as model organisms in their study.",
      url: "https://phys.org/news/2022-11-cellular-mechanisms-differences-hare-species.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/cellular-mechanisms-ex.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-02T17:43:03+00:00",
    },
    {
      author: null,
      title:
        "Researchers use Cas9 gene scissors to establish new virus resistance in winter barley",
      description:
        "Genome editing comes with great hopes for the improvement of crops in regards to the challenges posed by climate change, but also for breeding of disease resistance and an improved sustainability of agriculture.",
      url: "https://phys.org/news/2022-11-cas9-gene-scissors-virus-resistance.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/ipk-researchers-use-ca.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-02T19:21:03+00:00",
    },
    {
      author: null,
      title:
        "Invasive plant species are increasing exponentially, but no one knows how many species there are",
      description:
        "Invasive plants can have devastating effects on local ecologies, comparable to the effects wrought by global warming. And yet, there is currently no reliable understanding of how many invasive plant species there are in the world. New research, led by the University of Massachusetts Amherst and recently published in Ecological Applications, is the first to comprehensively pinpoint the various unknowns that must be addressed in order to intelligently manage invasive species around the world.",
      url: "https://phys.org/news/2022-11-invasive-species-exponentially.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/invasive-plants-specie.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-02T21:06:36+00:00",
    },
    {
      author: null,
      title:
        "In the latest human vs. machine match, artificial intelligence wins by a hair",
      description:
        "Vikas Nanda has spent more than two decades studying the intricacies of proteins, the highly complex substances present in all living organisms. The Rutgers scientist has long contemplated how the unique patterns of amino acids that comprise proteins determine whether they become anything from hemoglobin to collagen, as well as the subsequent, mysterious step of self-assembly where only certain proteins clump together to form even more complex substances.",
      url: "https://phys.org/news/2022-11-latest-human-machine-artificial-intelligence.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/in-the-latest-human-vs.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-02T21:06:07+00:00",
    },
    {
      author: "Keith Bradsher and Clifford Krauss",
      title: "China Is Burning More Coal, a Growing Climate Challenge",
      description:
        "The country’s emissions of greenhouse gases rose last year at the fastest pace in a decade. Beijing is looking for alternatives.",
      url: "https://www.nytimes.com/2022/11/03/business/energy-environment/china-coal-natural-gas.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/31/world/00China-Energy-1/00China-Energy-1-moth.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T09:00:40+00:00",
    },
    {
      author: null,
      title:
        "Two low-mass stars and one brown dwarf discovered around aged stars",
      description:
        "Using the Transiting Exoplanet Survey Satellite (TESS), an international team of astronomers has detected three companions to aged stars—two low-mass stars and one brown dwarf. The newfound objects are the size of Jupiter but at least 70 times more massive than the solar system's biggest planet. The finding is reported in a paper published October 25 on the arXiv pre-print server.",
      url: "https://phys.org/news/2022-11-low-mass-stars-brown-dwarf-aged.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/two-low-mass-stars-and.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T13:00:03+00:00",
    },
    {
      author: null,
      title: "Ancient submerged volcanoes bristle with sea life",
      description:
        "Scientists collaborating with Museums Victoria Research Institute have mapped the seafloor in Australia's Cocos (Keeling) Islands Marine Park in detail for the first time, revealing massive flat-topped ancient sea-mountains, flanked by volcanic cones, snarly ridges, and canyons formed from avalanches of sand that have slumped down onto the abyssal ocean floor.",
      url: "https://phys.org/news/2022-11-ancient-submerged-volcanoes-bristle-sea.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/ancient-submerged-volc.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T13:00:02+00:00",
    },
    {
      author: null,
      title: "Video: Why does climate change matter? We asked a NASA scientist",
      description:
        "Why does climate change matter? Because it's happening and we're already feeling its effects around the world. But there's hope.",
      url: "https://phys.org/news/2022-11-video-climate-nasa-scientist.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/climate-change-14.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T14:13:02+00:00",
    },
    {
      author: null,
      title:
        "Cooperation among hydropower producers could hold the answer to reviving the mighty Mekong",
      description:
        "The Mekong's floodplains are a global biodiversity hotspot sustaining one of the world's largest inland fisheries. However, two decades of hydropower developments have altered the river discharge and impacted the water available to the floodplains. In particular, the flood pulse—the principal driving force of healthy floodplains—is getting shorter and weaker.",
      url: "https://phys.org/news/2022-11-cooperation-hydropower-reviving-mighty-mekong.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/cooperation-among-hydr.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T15:19:06+00:00",
    },
    {
      author: null,
      title: "Crows able to understand the concept of recursion",
      description:
        "Researchers at the University of Tübingen have found via experimentation that crows are capable of understanding the concept of recursion. In their paper published in the journal Science Advances, Diana Liao, Katharina Brecht, Melissa Johnston and Andreas Nieder describe experiments they conducted with crows and what they learned.",
      url: "https://phys.org/news/2022-11-crows-concept-recursion.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/crows-able-to-understa.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T15:18:22+00:00",
    },
    {
      author: null,
      title: "There are, in fact, fish in the Hudson River",
      description:
        "People tend to laugh when I tell them that my job after college was catching fish out of the Hudson River. As someone who lacks the particular brand of outdoorsy-ness fitting to this job, it seems like an unlikely position for me, but what is more unlikely to people is that there are fish in the Hudson. Many assume that the river is incapable of supporting life. That the river itself is dead.",
      url: "https://phys.org/news/2022-11-fact-fish-hudson-river.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/there-are-in-fact-fish.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T15:50:03+00:00",
    },
    {
      author: null,
      title:
        "More than a story of treasures: Revisiting Tutankhamun's tomb 100 years after its discovery",
      description:
        'On November 4, 1922, a young Egyptian "water boy" on an archaeological dig is said to have accidentally stumbled on a stone that turned out to be the top of a flight of steps cut into the limestone bedrock.',
      url: "https://phys.org/news/2022-11-story-treasures-revisiting-tutankhamun-tomb.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/more-than-a-story-of-t.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T16:20:01+00:00",
    },
    {
      author: null,
      title:
        "Researchers' revamped AI tool makes water dramatically safer in refugee camps",
      description:
        "Researchers from York University's Dahdaleh Institute for Global Health Research and Lassonde School of Engineering have revamped their Safe Water Optimization Tool (SWOT) with multiple innovations that will help aid workers unlock potentially life-saving information from water-quality data regularly collected in humanitarian settings.",
      url: "https://phys.org/news/2022-11-revamped-ai-tool-safer-refugee.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/york-u-researchers-rev.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T20:34:41+00:00",
    },
    {
      author: null,
      title:
        "Combining neutrons and X-ray imaging, scientists study meteorites to explore how Earth acquired its water",
      description:
        "Each year, hundreds of meteorites—rocky bodies left over from the formation of the solar system—bombard Earth, delivering minerals, metals and water to our planet. Analyzing the crevices and mineral-rich deposits inside meteorites not only reveals the early history of planet formation but may provide clues about how the young Earth acquired water and other ingredients essential for life.",
      url: "https://phys.org/news/2022-11-combining-neutrons-x-ray-imaging-scientists.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/combining-neutrons-and.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T20:31:41+00:00",
    },
    {
      author: "Kenneth Chang",
      title: "China’s Out-of-Control Rocket Booster Is Headed Back to Earth",
      description:
        "For the fourth time, the country’s space program has used a 23-ton launcher that has scattered debris after previous flights.",
      url: "https://www.nytimes.com/2022/11/04/science/china-rocket-debris.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/04/science/04china-rocket1/merlin_215772954_ac74912e-eae3-4636-b69d-dc8991a45acd-moth.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T04:00:10+00:00",
    },
    {
      author: "",
      title:
        "PacBio Announces Onso, the Highly Accurate Short-Read Sequencing Platform",
      description:
        "PacBio, a leading developer of high-quality, highly accurate sequencing solutions, announce the commencement of external beta testing of the Onso&trade; Sequencing System. This innovative benchtop short-read DNA sequencing platform is expected to provide an extraordinary level of accuracy by utilizing PacBio&rsquo;s unique sequencing by binding (SBB) technology...",
      url: "https://www.labbulletin.com/articles/pacbio-announces-onso-the-highly-accurate-shortread",
      source: "Lab Bulletin",
      image: null,
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T07:05:15+00:00",
    },
    {
      author: null,
      title: "An algorithm to detect gerrymandering",
      description:
        "New waves of statisticians, including a team at Harvard, have developed tools they think can help police the longstanding problem of gerrymandering of congressional and legislative districts in states by parties seeking to tip the scales for their candidates.",
      url: "https://phys.org/news/2022-11-algorithm-gerrymandering.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/an-algorithm-to-detect.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T15:44:49+00:00",
    },
    {
      author: null,
      title:
        "DNA research shows ancient Britain was more diverse than we imagined",
      description:
        "When you imagine life for ordinary people in ancient Britain, you'd be forgiven for picturing quaint villages where everyone looked and spoke the same way. But a recent study could change the way historians think about early medieval communities.",
      url: "https://phys.org/news/2022-11-dna-ancient-britain-diverse.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/dna-research-shows-anc.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T15:54:03+00:00",
    },
    {
      author: null,
      title: "Why some like it hot: The science of spiciness",
      description:
        "Spiciness, or its perception, occurs in most cuisines worldwide. The chili pepper of the genus Capsicum (family Solanaceae) is one of the world's most widely used spices, found in thousands of recipes and sometimes eaten as a stand-alone dish. One in every four people on the planet currently eats chilies on a daily basis.",
      url: "https://phys.org/news/2022-11-hot-science-spiciness.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/why-some-like-it-hot-t.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T16:04:03+00:00",
    },
    {
      author: null,
      title:
        "Socially responsible companies laid off more workers than their peers during the COVID-19 pandemic",
      description:
        "A good track record in corporate social responsibility (CSR) is not a guarantee that the company will continue to focus on CSR in times of crisis. According to a new study from the University of Vaasa, US companies with a history of high CSR laid off more employees during the COVID-19 pandemic than their peers.",
      url: "https://phys.org/news/2022-11-socially-responsible-companies-laid-workers.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/fired-worker.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T17:37:11+00:00",
    },
    {
      author: null,
      title: "Parallel alignment of dressing fibers accelerates wound healing",
      description:
        "A team of researchers from Singapore has reported the development of a skin-mimicking scaffold by parallelly aligning nanofibers made up of a mixture of polycaprolactone (PCL) and gelatin that enhances wound healing. Their research has recently been published in Advanced Fiber Materials.",
      url: "https://phys.org/news/2022-11-parallel-alignment-fibers-wound.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/parallel-alignment-of.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T17:45:03+00:00",
    },
    {
      author: null,
      title:
        "Why putting your artistic calling on hold might not always be such a bad idea",
      description:
        "As a boy, Terry loved music and taught himself trombone, guitar and the tuba. Right through school and university he played in the evenings in jazz groups, musical theater and marching bands. He started work as an accountant in his early twenties, but his wide social circle in the music world meant he was still out playing gigs every evening.",
      url: "https://phys.org/news/2022-11-artistic-bad-idea.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/music-1.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-02T16:34:03+00:00",
    },
    {
      author: "Benjamin Ryan in New York",
      title:
        "Study finds evidence of ‘considerable’ presymptomatic spread of monkeypox",
      description:
        "Research could help explain how virus got so out of control this year, while also refining efforts to combat itBritish researchers have identified evidence of “considerable” transmission of monkeypox in the few days before symptoms of the virus emerge.If replicated, the finding would upend received wisdom about how the virus spreads. It could help explain how monkeypox, which causes sometimes excruciatingly painful lesions, got so out of control this year, while also refining efforts to combat it. Continue reading...",
      url: "https://www.theguardian.com/world/2022/nov/02/monkeypox-symptoms-transmission-spread",
      source: "The Guardian",
      image:
        "https://i.guim.co.uk/img/media/7c75bbd246ee14438f10491858cd8e65eba845dc/0_77_3163_1898/master/3163.jpg?width=140&quality=85&auto=format&fit=max&s=17ef0c482138ee0904c0b0bca86228f2",
      category: "science",
      language: "en",
      country: "gb",
      published_at: "2022-11-02T22:30:26+00:00",
    },
    {
      author: null,
      title:
        "Yellowstone, Kilimanjaro glaciers among those set to vanish by 2050: UNESCO",
      description:
        "Glaciers at many UNESCO World Heritage sites including Yellowstone and Kilimanjaro National Park will likely vanish by 2050, the UN agency warned Thursday, urging leaders to act fast to save the rest.",
      url: "https://phys.org/news/2022-11-yellowstone-kilimanjaro-glaciers-unesco.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/kilimanjaro-national-p.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T08:48:19+00:00",
    },
    {
      author: null,
      title: "New way to target 'undruggable' molecules involved in cancer",
      description:
        'For decades, cancer researchers have longed for a way to target a set of proteins called transcription factors. While we\'ve long known that tumors use these proteins to grow out of control, their unique configurations meant that for more than 30 years they had earned a reputation as "undruggable."',
      url: "https://phys.org/news/2022-11-undruggable-molecules-involved-cancer.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/scientists-discover-wa.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T13:35:04+00:00",
    },
    {
      author: null,
      title: "Indigenous languages make inroads into public schools",
      description:
        "Whenever November would roll around, James Gensaw, a Yurok language high school teacher in far northern California, would get a request from a school administrator. They would always ask him to bring students from the Native American Club, which he advises, to demonstrate Yurok dancing on the high school quad at lunch time.",
      url: "https://phys.org/news/2022-11-indigenous-languages-inroads-schools.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/indigenous-languages-m.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T17:13:04+00:00",
    },
    {
      author: null,
      title:
        "Femtosecond GHz/MHz BiBurst pulses can greatly enhance silicon ablation efficiency",
      description:
        "Scientists working on laser application at the RIKEN Center for Advanced Photonics (RAP) have developed a new technique using GHz bursts of femtosecond laser pulses grouped in MHz envelopes, termed BiBurst mode, for high-efficiency and high-quality ablation of silicon.",
      url: "https://phys.org/news/2022-11-femtosecond-ghzmhz-biburst-pulses-greatly.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/femtosecond-ghzmhz-bib.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T17:23:56+00:00",
    },
    {
      author: null,
      title:
        "Novel single-crystal production method opens up promising avenues for studies in solid-state physics",
      description:
        "Single crystals are materials in which the crystal lattice is continuous and unbroken to the edges of the sample, with no grain boundaries. The atoms occupy regular positions, which are repeated indefinitely in space. While polycrystals are made up of many crystal grains or crystallites of varying sizes and orientations, monocrystals consist of a single grain.",
      url: "https://phys.org/news/2022-11-single-crystal-production-method-avenues-solid-state.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/novel-single-crystal-p.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T17:48:03+00:00",
    },
    {
      author: null,
      title: "Scientists identify the highest-ever recorded volcanic plume",
      description:
        "Using images captured by satellites, researchers in the University of Oxford's Department of Physics and RAL Space have confirmed that the January 2022 eruption of the Hunga Tonga-Hunga Ha'apai volcano produced the highest-ever recorded plume. The colossal eruption is also the first to have been directly observed to have broken through to the mesosphere layer of the atmosphere. The results have been published today in the journal Science.",
      url: "https://phys.org/news/2022-11-scientists-highest-ever-volcanic-plume.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/scientists-identify-th-3.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T18:00:01+00:00",
    },
    {
      author: null,
      title:
        "Aggressively patriarchal worldview attracted Swedish women to the Islamic State, study finds",
      description:
        "Contrary to popular belief, Swedish women who have joined the Islamic State (IS) were not simply passively manipulated by men. A new study from Lund University suggests that it was a strict religious culture, which opposes gender equality, and modern gender roles and norms, that attracted Swedish women to join.",
      url: "https://phys.org/news/2022-11-aggressively-patriarchal-worldview-swedish-women.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/aggressively-patriarch.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T20:38:04+00:00",
    },
    {
      author: "Jordan Kushins and David Fernández",
      title: "How Can a Historic Garden Adapt to Climate Change?",
      description:
        "English estates are trying to maintain the heritage and identity of their grounds, while also making them resistant to unfamiliar temperatures and weather.",
      url: "https://www.nytimes.com/2022/11/04/t-magazine/oxburgh-hall-historic-gardens-climate-change.html",
      source: "The New York Times",
      image: null,
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T09:00:45+00:00",
    },
    {
      author: null,
      title: "Examining COVID's impact on home-court advantages",
      description:
        "The decision to play the 2020–21 college basketball season was a jump ball for NCAA officials, who agonizingly debated what to do.",
      url: "https://phys.org/news/2022-11-covid-impact-home-court-advantages.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/examining-covids-impac.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T15:21:04+00:00",
    },
    {
      author: null,
      title: "Limiting antibiotics for cows may create new dairy market",
      description:
        "Consumers would be willing to buy milk from cows only treated with antibiotics when medically necessary—as long as the price isn't much higher than conventional milk, according to researchers at the College of Veterinary Medicine.",
      url: "https://phys.org/news/2022-11-limiting-antibiotics-cows-dairy.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/milk-cow.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T17:30:04+00:00",
    },
    {
      author: null,
      title:
        "New book confronts the intersection between mobility and the climate crisis",
      description:
        "A new book by Stephanie Sodero of the HCRI explores the intersection between fossil fuel-powered mobility and climate change and how communities and mobility need to be revolutionized in Sodero's homeland of Canada and beyond in the context of climate change.",
      url: "https://phys.org/news/2022-11-intersection-mobility-climate-crisis.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/new-book-confronts-the.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T17:57:02+00:00",
    },
    {
      author: null,
      title:
        "Exploring the key gene networks that control magnetite biomineralization in prokaryotes",
      description:
        "Magnetotactic bacteria (MTB) are phylogenetically and morphologically diverse prokaryotes that share an ancestral capability of producing intracellular magnetite (Fe3O4) or/and greigite (Fe3S4) nanocrystals within organelles called magnetosomes.",
      url: "https://phys.org/news/2022-11-exploring-key-gene-networks-magnetite.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/key-gene-networks-that.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-02T18:03:03+00:00",
    },
    {
      author: null,
      title:
        "New insights into nanochannel fabrication using femtosecond laser pulses",
      description:
        "Recent progress in the fabrication of nanostructures has led to their application in several fields, including biomedicine, chemistry, materials engineering, and environmental remediation.",
      url: "https://phys.org/news/2022-11-insights-nanochannel-fabrication-femtosecond-laser.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/new-insights-into-nano.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-02T18:29:03+00:00",
    },
    {
      author: null,
      title: "Nanosensors target enzymes to monitor and study cancer",
      description:
        'Cancer is characterized by a number of key biological processes known as the "hallmarks of cancer," which remodel cells and their immediate environment so that tumors can form, grow, and thrive. Many of these changes are mediated by specific genes and proteins, working in tandem with other cellular processes, but the specifics vary from cancer type to cancer type, and even from patient to patient.',
      url: "https://phys.org/news/2022-11-nanosensors-enzymes-cancer.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/nanosensors-target-enz.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-02T21:05:05+00:00",
    },
    {
      author: null,
      title:
        "Police agencies significantly overrepresent Black suspects in Facebook posts, study finds",
      description:
        "Law enforcement agencies on Facebook disproportionately post about crimes involving Black suspects, according to new research from co-authored by a University of Chicago scholar.",
      url: "https://phys.org/news/2022-11-police-agencies-significantly-overrepresent-black.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/police-agencies-signif.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T13:37:03+00:00",
    },
    {
      author: null,
      title: "A new quantum component made from graphene",
      description:
        "Less than 20 years ago, Konstantin Novoselov and Andre Geim first created two-dimensional crystals consisting of just one layer of carbon atoms. Known as graphene, this material has had quite a career since then.",
      url: "https://phys.org/news/2022-11-quantum-component-graphene.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2020/graphene.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T13:44:03+00:00",
    },
    {
      author: null,
      title:
        "A first-of-its-kind framework to characterize hydrogels for biomedical scientists and engineers",
      description:
        "Researchers at CÚRAM have this week published an interdisciplinary framework that enables the development of extracellular matrix-inspired hydrogels for biomedical applications.",
      url: "https://phys.org/news/2022-11-first-of-its-kind-framework-characterize-hydrogels-biomedical.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/cram-publishes-first-o.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T13:58:02+00:00",
    },
    {
      author: null,
      title:
        "Why schools' going back to 'normal' won't work for students of color",
      description:
        "National test results released in September 2022 show unprecedented losses in math and reading scores since the pandemic disrupted schooling for millions of children.",
      url: "https://phys.org/news/2022-11-schools-wont-students.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/hispanic-school.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T15:54:03+00:00",
    },
    {
      author: null,
      title:
        "Ripple effect: As global freshwater basins dry up, the threat to ecosystems and communities grows",
      description:
        "When people use freshwater beyond a physically sustainable rate, it sets off a cascade of impacts on ecosystems, people and the planet. These impacts include groundwater wells running dry, fish populations becoming stranded before they are able to spawn and protected wetland ecosystems turning into dry landscapes.",
      url: "https://phys.org/news/2022-11-ripple-effect-global-freshwater-basins.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/ripple-effect-as-globa.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T16:13:03+00:00",
    },
    {
      author: null,
      title:
        "Cohousing is empowering people to fight back against a global housing crisis",
      description:
        "The debate around how to fix the global housing crisis usually hinges on whether more market or more state is required. Some people stress the need for additional housing stock and less regulatory red tape, so that the market can create it. Others claim that stricter government measures—against ruthless developers and landlords, more rent control, and more public housing—are crucial.",
      url: "https://phys.org/news/2022-11-cohousing-empowering-people-global-housing.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/cohousing-is-empowerin.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T16:12:05+00:00",
    },
    {
      author: null,
      title: "Invasive fruit fly may pose threat to forest ecosystems",
      description:
        "The invasive spotted wing drosophila (SWD), introduced from South-East Asia, is a well-known fruit crop pest. It lays its eggs by destroying the mechanical protection of the fruit's skin, providing an entry point for further infestation. Egg deposition and inoculated microbes then accelerate decay, and as a result the fruit rots and becomes inedible. While this small fly is known to cause massive economic damage in agriculture, little is known about its ecological impact on more natural ecosystems such as forests.",
      url: "https://phys.org/news/2022-11-invasive-fruit-pose-threat-forest.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/invasive-fruit-fly-may.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T17:37:21+00:00",
    },
    {
      author: null,
      title:
        "Oldest paleogenome from the African continent tells of the extinction of the blue antelope",
      description:
        "The blue antelope (Hippotragus leucophaeus) was an African antelope with a bluish-gray pelt, related to the living sable and roan antelopes. The last blue antelope was shot around 1800, only 34 years after it was first described scientifically, making it the only large African mammal species to have become extinct in historical times.",
      url: "https://phys.org/news/2022-11-oldest-paleogenome-african-continent-extinction.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/dna-5.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T20:14:03+00:00",
    },
    {
      author: null,
      title:
        "Research shows COVID-19 lockdown did not lead to quieter offshore ocean",
      description:
        "Life on land may have quieted down during the height of the pandemic, but far offshore the Atlantic Ocean was just as active as ever according to a new study from the University of New Hampshire. Researchers found that there was no significant change in the continental shelf's underwater soundscape during the year 2020—a surprising contrast to earlier reports of quieter coastal waters during that same timeframe.",
      url: "https://phys.org/news/2022-11-covid-lockdown-quieter-offshore-ocean.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/research-shows-covid-1.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-03T21:01:02+00:00",
    },
    {
      author: null,
      title: "Astronomers discover closest black hole to Earth",
      description:
        "Black holes are the most extreme objects in the universe. Supermassive versions of these unimaginably dense objects likely reside at the centers of all large galaxies. Stellar-mass black holes—which weigh approximately five to 100 times the mass of the sun—are much more common, with an estimated 100 million in the Milky Way alone.",
      url: "https://phys.org/news/2022-11-astronomers-closest-black-hole-earth.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/astronomers-discover-c-1.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T14:47:03+00:00",
    },
    {
      author: null,
      title:
        "Semi-nonlinear etchless lithium niobate waveguide with bound states in the continuum",
      description:
        "Lithium niobite (LN) with an ultra-wide optical transparent window has shown excellent nonlinear, electro-optic, acoustic-optic, piezoelectric, thermoelectric and photorefractive effects. It is an excellent platform for realizing χ(2) nonlinear photonic devices with low power consumption and high efficiency.",
      url: "https://phys.org/news/2022-11-semi-nonlinear-etchless-lithium-niobate-waveguide.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/semi-nonlinear-etchles.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T17:16:49+00:00",
    },
    {
      author: null,
      title:
        "Report examines how agroforestry can deliver for nature and the climate",
      description:
        "Agroforestry—farming with trees—could be pivotal in helping the agricultural sector reach net zero by 2050, according to new research carried out by Cranfield University, which underpins a report by the Woodland Trust.",
      url: "https://phys.org/news/2022-11-agroforestry-nature-climate.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/farming-for-the-future.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-04T17:16:43+00:00",
    },
    {
      author: null,
      title: "New device may offer a better way to prevent tick bites",
      description:
        "When it comes to preventing tick bites—especially in light of the dramatic, decade-long rise in tick-borne diseases—bug sprays help but are less than optimal.",
      url: "https://phys.org/news/2022-11-device.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/ticked-off-new-device.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T21:16:03+00:00",
    },
    {
      author: null,
      title:
        "Up to 32 frog species thought to be extinct may not be, new research shows",
      description:
        "If there's news about amphibians these days, odds are it's not going to be good. A pathogenic fungus has been decimating populations around the world for about forty years and counting, pushing many species to extinction. Once a species is classified as extinct, odds are it isn't coming back.",
      url: "https://phys.org/news/2022-11-frog-species-thought-extinct.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/back-from-the-dead-up-1.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T21:57:19+00:00",
    },
    {
      author: "Raymond Zhong",
      title:
        "Who’s Driving Climate Change? New Data Catalogs 72,000 Polluters and Counting",
      description:
        "A nonprofit backed by Al Gore and other big environmental donors says it can track emissions down to individual power plants, oil fields and cargo ships.",
      url: "https://www.nytimes.com/2022/11/09/climate/climate-change-emissions-satellites.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/09/climate/09cli-satellites1/09cli-satellites1-moth.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T05:02:11+00:00",
    },
    {
      author: "Becki Robins",
      title: "Uncertainty for Alaskan Salmon as Mining Companies Dig In",
      description:
        "There are now more than a dozen active and proposed mines in the transboundary region of Alaska and British Columbia. The mining industry is actively working to contain its waste, but scientists say these efforts might not be enough, and that the region&#8217;s wild salmon populations are at risk.",
      url: "https://undark.org/2022/11/09/mining-is-booming-will-alaskan-salmon-survive/",
      source: "Truth Beauty Science. - Undark",
      image:
        "https://undark.org/wp-content/uploads/2022/10/GettyImages-1140205290_crop.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T08:21:33+00:00",
    },
    {
      author: null,
      title:
        "What is free food worth? Study estimates the value of food pantry services",
      description:
        "Although it's clear that food pantries have had an impact on alleviating food insecurity and hunger, their economic value to their beneficiaries has remained an open question. A study published in the American Journal of Agricultural Economics estimates that the annual value of access to food pantries within a food bank system in Colorado is between $600 and $1,000 for a client household, and the value per pantry visit is between $40 and $60.",
      url: "https://phys.org/news/2022-11-free-food-worth-pantry.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/food-pantry-1.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T09:58:42+00:00",
    },
    {
      author: null,
      title: "Just Stop Oil: Reporter speaks about her arrest at M25 protest",
      description:
        "Just Stop Oil: Reporter speaks about her arrest at M25 protest",
      url: "https://news.yahoo.com/just-stop-oil-reporter-speaks-115557117.html",
      source: "Yahoo News",
      image:
        "https://media.zenfs.com/en/bbc_us_articles_995/488df5bfba5c821b16d247255fc46f3d",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T11:55:57+00:00",
    },
    {
      author: null,
      title: "12 scientifically proven signs you’re in love",
      description:
        "Studies led by anthropologist Helen Fisher revealed that the brain's \"in love\" phase is a unique and well-defined period of time, and there are 13 telltale signs you're in love.",
      url: "https://www.livescience.com/33720-13-scientifically-proven-signs-love.html/",
      source: "Live Science: The Most Interesting Articles",
      image: "http://cdn.mos.cms.futurecdn.net/tptdQ8FbGRgzJsniWNQqeC.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T12:36:58+00:00",
    },
    {
      author: "Tim Hornyak",
      title: "Could Jupiter’s Heat Waves Help Solve a Planetary Energy Crisis?",
      description:
        "Infrared observations reveal that Jupiter’s upper atmosphere is much warmer than models predict. The discovery may be a clue to finding missing heat sources in other giant planets.",
      url: "https://eos.org/articles/could-jupiters-heat-waves-help-solve-a-planetary-energy-crisis",
      source: "Eos: Earth And Space Science News",
      image:
        "https://i0.wp.com/eos.org/wp-content/uploads/2022/11/jupiter-northern-hemisphere.jpg?fit=780%2C439&ssl=1",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T12:59:26+00:00",
    },
    {
      author: null,
      title:
        "Scientists genetically engineer plants to yield more vegetable oil",
      description:
        "Scientists from Nanyang Technological University, Singapore (NTU Singapore) have successfully genetically modified a plant protein that is responsible for oil accumulation in plant seeds and edible nuts.",
      url: "https://phys.org/news/2022-11-scientists-genetically-yield-vegetable-oil.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/ntu-singapore-scientis-3.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T13:46:04+00:00",
    },
    {
      author: null,
      title:
        "Personality differences from day one after birth despite identical genes and identical environment",
      description:
        "According to current knowledge, personality is determined by genetic predisposition and environmental influences. If genetically identical individuals grow up under identical conditions, are these individuals completely identical? So far, twin studies have reached their limits in answering this fundamental question.",
      url: "https://phys.org/news/2022-11-personality-differences-day-birth-identical.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/personality-difference.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T13:55:52+00:00",
    },
    {
      author: null,
      title:
        "New study of Ötzi the Iceman suggests his preservation story was not a series of miracles",
      description:
        "A small team of researchers affiliated with institutions in Norway, Sweden and Austria, has found evidence that suggests a flaw in the original story of how Ötzi (the Iceman) remained preserved for so long. In their paper published in the journal The Holocene, the group details what they describe as a more plausible explanation.",
      url: "https://phys.org/news/2022-11-tzi-iceman-story-series-miracles.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/new-study-of-tzi-the-i.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T14:32:15+00:00",
    },
    {
      author: null,
      title: "Nuclear risk: How does Zaporizhzhia compare with Chernobyl?",
      description:
        "Although it's impossible to say for sure what consequences an accident at a nuclear power plant might have on human health in the environment nearby, experts can make some predictions.",
      url: "https://www.dw.com/en/nuclear-risk-how-does-zaporizhzhia-compare-with-chernobyl/a-63686362?maca=en-rss_en_science-22531-xml-mrss",
      source: "Deutsche Welle",
      image: null,
      category: "science",
      language: "en",
      country: "de",
      published_at: "2022-11-09T15:37:00+00:00",
    },
    {
      author: null,
      title:
        "Could state-sponsored retirement plans help workers save more? Maybe, says report",
      description:
        "State-sponsored retirement plans could help workers save more and help retirees rely less on social services—as long as the cost-effectiveness of such plans aren't bogged down by fees—according to a new report from Rice University's Baker Institute for Public Policy.",
      url: "https://phys.org/news/2022-11-state-sponsored-workers.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/retirement-money.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T15:42:03+00:00",
    },
    {
      author: null,
      title: "Gore announces fossil fuel emissions inventory at UN summit",
      description:
        'A detailed inventory of the top known sources of greenhouse gas emitters launched by former U.S. Vice President Al Gore at the U.N. climate summit in Egypt on Wednesday found that the top 14 individual polluters are all gas and oil fields and their associated facilities, despite their emissions being "significantly underreported."',
      url: "https://phys.org/news/2022-11-gore-fossil-fuel-emissions-summit.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/gore-announces-fossil.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T16:09:55+00:00",
    },
    {
      author: null,
      title:
        "Thick and sticky bacteria are more resistant to antibiotics, leading to high patient mortality",
      description:
        "Klebsiella pneumoniae are bacteria that can cause various infections. These bacteria are becoming increasingly resistant to treatment, leading to life-threatening illnesses.",
      url: "https://phys.org/news/2022-11-thick-sticky-bacteria-resistant-antibiotics.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/thick-and-sticky-bacte.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T16:06:53+00:00",
    },
    {
      author: null,
      title:
        "Native American children's protection against adoption by non-Indian families is before the Supreme Court",
      description:
        "The Supreme Court is about to hear arguments about the constitutionality of a 1978 law enacted to protect Native American children in the U.S. and strengthen their families.",
      url: "https://phys.org/news/2022-11-native-american-children-non-indian-families.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/supreme-court.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T17:18:04+00:00",
    },
    {
      author: null,
      title:
        "After decades putting the brakes on global action, does Australia deserve to host UN climate talks with Pacific nations?",
      description:
        "As the COP27 climate talks got underway in Egypt this week, climate and energy minister Chris Bowen announced Australia would bid to co-host the annual United Nations climate summit with Pacific island nations in 2026.",
      url: "https://phys.org/news/2022-11-decades-global-action-australia-host.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/after-decades-putting.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T17:28:03+00:00",
    },
    {
      author: null,
      title:
        "Alumni from Britain's top girls' public schools 20 times more likely to reach elite positions",
      description:
        'The alumni of 12 leading girls\' public schools (Note: "public schools" in UK means "private schools" in the USA) are 20 times more likely to reach the most powerful elite positions in British society than women who attended any other school, according to a unique historical analysis of Who\'s Who.',
      url: "https://phys.org/news/2022-11-alumni-britain-girls-schools-elite.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/alumni-from-britains-t.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T18:42:30+00:00",
    },
    {
      author: null,
      title:
        "Gliding treefrogs, mini-males and burrowing frogs in trees: Why Melanesia is the world's tropical island frog hotspot",
      description:
        "A chocolate treefrog that looks like a Freddo. Burrowing frogs which live in trees. Long-nosed frogs named after Pinocchio. Frogs which go straight from egg to froglet without stopping at tadpole. And large treefrogs which can glide from tree to tree.",
      url: "https://phys.org/news/2022-11-gliding-treefrogs-mini-males-burrowing-frogs.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/gliding-treefrogs-mini.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T18:51:16+00:00",
    },
    {
      author: null,
      title: "Turtles in demand as pets, leading to a spike in poaching",
      description:
        "Swimming in two plastic bins inside a brightly lit and sterile quarantine room at a Rhode Island zoo, 16 quarter-sized turtle hatchlings represent a growing worry for conservationist Lou Perrotti.",
      url: "https://phys.org/news/2022-11-turtles-demand-pets-spike-poaching.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/turtles-in-demand-as-p.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T19:18:09+00:00",
    },
    {
      author: null,
      title: "US political partisanship affects first impressions of faces",
      description:
        "In an experimental study, participants' first impressions of photos of strangers' faces were strongly influenced by disclosure of the stranger's political partisanship. Brittany Cassidy of the University of North Carolina at Greensboro, U.S., and colleagues present these findings in the open-access journal PLOS ONE on November 9, 2022.",
      url: "https://phys.org/news/2022-11-political-partisanship-affects.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2020/faces.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-09T20:32:24+00:00",
    },
    {
      author: null,
      title:
        "Glucose-starved yeast poisons neighboring microorganisms as well as its own clones",
      description:
        "Yeast is not the simple single-celled microorganism we once thought, but a competitive killer. When starved of glucose, yeast releases a toxin that will poison other microorganisms that have entered its surrounding habitat, even its own clones. This venomous phenomenon was previously unknown and contributes to our understanding of unicellular microorganism behavior and the evolution of unicellular to multicellular organisms, as well as having potentially useful applications for the food industry.",
      url: "https://phys.org/news/2022-11-glucose-starved-yeast-poisons-neighboring-microorganisms.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/glucose-starved-yeast.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T20:54:33+00:00",
    },
    {
      author: null,
      title:
        "The charge dynamics of a non-centrosymmetric magnetic Weyl semimetal",
      description:
        "In work published in npj Quantum Materials, a team led by Prof. Leonardo Degiorgi in the Department of Physics at ETH Zurich has studied the broadband charge dynamics (i.e., longitudinal optical conductivity) of the ferromagnetic (FM), non-centrosymmmetric PrAlGe material. They reveal its electronic environment, based on correlated Weyl states, which favors an unusually large anomalous Hall conductivity (AHC) at low temperatures. The researchers thus propose a suitable experimental approach to trace the relevant ingredients of the electronic structure deploying substantial Berry curvatures...",
      url: "https://phys.org/news/2022-11-dynamics-non-centrosymmetric-magnetic-weyl-semimetal.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/charge-dynamics-of-a-n.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T20:54:16+00:00",
    },
    {
      author: null,
      title:
        "'Death in the family': California tribe anguished as water, sacred fish vanish from rivers",
      description:
        "Carrying a pair of 20-foot wooden poles with a net strung between them, Ron Reed shimmied above the Klamath River across wooden boards perched between slippery boulders.",
      url: "https://phys.org/news/2022-11-death-family-california-tribe-anguished.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/river.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T21:10:07+00:00",
    },
    {
      author: null,
      title:
        "Study finds that Americans are more likely than others to share COVID-19 misinformation online",
      description:
        "People living in the United States are more than three times more likely to share misinformation and conspiracy theories about COVID-19 than people in four other English-speaking countries, including Canada, a Simon Fraser University study has found.",
      url: "https://phys.org/news/2022-11-americans-covid-misinformation-online.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/social-media.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T21:34:03+00:00",
    },
    {
      author: "Amelia Nierenberg",
      title: "Your Tuesday Briefing: The U.S. Midterms Loom",
      description: "Plus a warning at COP27 and Kherson in distress.",
      url: "https://www.nytimes.com/2022/11/07/briefing/us-midterms-cop27-asia.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/08/world/110822ambriefing-asia-promo/110822ambriefing-asia-promo-moth-v2.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T21:31:43+00:00",
    },
    {
      author: null,
      title:
        "Should maize farmers in sub-Saharan Africa store or sell their grain?",
      description:
        "Many maize farmers in sub-Saharan Africa sell their crop at harvest, often because they need funds to pay expenses. Development agencies often support or sponsor harvest-time loans that encourage farmers to store some of their grain for later sale, on an assumption that its market value will increase in months to come. But that's not a sure bet, as a new University of Illinois study reveals. The work is published in the American Journal of Agricultural Economics.",
      url: "https://phys.org/news/2022-11-maize-farmers-sub-saharan-africa-grain.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/should-maize-farmers-i.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T21:48:03+00:00",
    },
    {
      author: "",
      title:
        "Sartorius Enters Research Partnership with The BASE Facility at the University of Queensland",
      description:
        "Sartorius entered a research partnership with The BASE Facility at The University of Queensland (UQ) to improve the manufacturing process of nucleic acid products led by the external collaboration group, Separation Technology Marketing team. The BASE facility is an internationally recognized leader in mRNA sciences at the Australian Institute for Bioengineering and Nanotechnology (AIBN) at UQ...",
      url: "https://www.labbulletin.com/articles/sartorius-enters-research-partnership-the-base-facility",
      source: "Lab Bulletin",
      image: null,
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T07:10:16+00:00",
    },
    {
      author: "Jennifer Schmidt",
      title: "Warming temps could turn some blue lakes green or brown",
      description:
        "Slightly warmer summers could cause thousands of blue lakes to become a murky green or brown, according to a tally of color in 85,000 lakes worldwide.",
      url: "https://www.snexplores.org/article/climate-change-turn-color-blue-lakes-green-brown",
      source: "Science News For Students",
      image:
        "https://www.snexplores.org/wp-content/uploads/2022/09/092822_js_fewer-blue-lakes_feat-330x186.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T11:30:00+00:00",
    },
    {
      author: null,
      title: "Summer camps promote altruism in children, study finds",
      description:
        "Be able to control oneself, cooperate or help others: having socio-emotional abilities is essential for those who wish to interact positively with their peers. These skills are largely acquired during childhood and can be trained in different contexts, such as school, family or leisure.",
      url: "https://phys.org/news/2022-11-summer-altruism-children.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/summer-camp.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T13:37:03+00:00",
    },
    {
      author: null,
      title:
        "New approach to fabricating ion-conducting ceramic membranes for stable hydrogen production",
      description:
        "Hydrogen has attracted much attention due to its potential as a clean energy carrier. To date, the majority of hydrogen is produced from fossil fuels, such as natural gas, coal and oil. Such fossil-derived hydrogen must be purified from common contaminants (e.g., CO2, CH4, CO and H2S) for further fuel cell applications.",
      url: "https://phys.org/news/2022-11-approach-fabricating-ion-conducting-ceramic-membranes.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/new-approach-to-fabric.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T13:44:02+00:00",
    },
    {
      author: null,
      title:
        "Novel atlas shows vast urban infrastructure divide between Global South and Global North",
      description:
        "New data from an international research team adds another dimension—literally—to understanding the economic and environmental impacts of how cities are built.",
      url: "https://phys.org/news/2022-11-atlas-vast-urban-infrastructure-global.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/novel-atlas-shows-vast.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T13:52:04+00:00",
    },
    {
      author: null,
      title:
        "Highly efficient vectorial field manipulation using a transmitted tri-layer metasurface",
      description:
        "A new publication from Opto-Electronic Advances discusses highly efficient vectorial field manipulation using a transmitted tri-layer metasurface.",
      url: "https://phys.org/news/2022-11-highly-efficient-vectorial-field-transmitted.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/highly-efficient-vecto.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T13:57:02+00:00",
    },
    {
      author: null,
      title:
        "Enhanced single-nanoparticle collisions for the hydrogen evolution reaction in a confined microchannel",
      description:
        "Single-nanoparticle (NP) collisions have enabled the measurement of electrocatalytic reactions on single NPs by the nanoconfinement-amplified current. Recently, it has been demonstrated that the electrocatalytic activity of single NPs is improved by stochastic collision electrochemistry, because the good dispersion alleviates the aggregation, deactivation, and detachment of nano-electrocatalysts adhered on the electrode surface. However, there is still a pressing need to further increase the electrocatalytic performance of single NPs.",
      url: "https://phys.org/news/2022-11-single-nanoparticle-collisions-hydrogen-evolution-reaction.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/enhanced-single-nanopa.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T14:05:03+00:00",
    },
    {
      author: null,
      title:
        "Can juries still deliver justice in high-profile cases in the age of social media?",
      description:
        "The recent sudden end to the Bruce Lehrmann trial last month raises again whether the jury is fit for purpose in a 21st century hyper-connected world.",
      url: "https://phys.org/news/2022-11-juries-justice-high-profile-cases-age.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/trial.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T17:23:04+00:00",
    },
    {
      author: null,
      title:
        "The challenge for 'chauffeur moms': Navigating a city that wasn't planned for women",
      description:
        "Chauffeur moms are a well-known Australian phenomenon. A lack of convenient transport options coupled with gendered roles has made many suburban women (and their children) car-dependent, whether they like it or not. And, more often than not, the demands of household chores and child rearing fall more heavily on women.",
      url: "https://phys.org/news/2022-11-chauffeur-moms-city-wasnt-women.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2022/woman-driving.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T17:21:05+00:00",
    },
    {
      author: null,
      title:
        "If Democrats prevail during the midterms, TV advertising might have something to do with it",
      description:
        "The neck-and-neck race for control of the U.S. Senate is particularly unwelcome news for Democrats. Not long ago, it looked as if they could maintain or even expand their slim Senate majority. Now, control of the chamber is essentially a toss-up.",
      url: "https://phys.org/news/2022-11-democrats-prevail-midterms-tv-advertising.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/if-democrats-prevail-d.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T17:31:06+00:00",
    },
    {
      author: null,
      title:
        "A review of research achievements related to the study of extreme heat waves",
      description:
        "The summer of 2022 brought extreme heat over most of the Eurasian continent and North America. This abnormal warming led to extraordinarily long-lasting extreme heat waves, especially in Europe and China. Because of this extreme heat, a research team has undertaken a review of the recent achievements in the study of heat waves.",
      url: "https://phys.org/news/2022-11-extreme.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/team-publishes-review.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T19:12:03+00:00",
    },
    {
      author: null,
      title:
        "Tiger sharks that interact with tourists are larger and have higher hormone levels, study shows",
      description:
        "Tiger Beach in the Bahamas is famous for its paradisiacal beauty and for being frequented by an animal that might scare most people away but is actually an outstanding diving tourism attraction: the Tiger shark (Galeocerdo cuvier). The sea is crystal clear and only 5 m deep on average, so the sharks, which can surpass 3 m in length, can easily be seen. They are drawn to the site by local tour operators, who throw fish and other food into the water.",
      url: "https://phys.org/news/2022-11-tiger-sharks-interact-tourists-larger.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/tiger-sharks-that-inte.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T19:32:03+00:00",
    },
    {
      author: "University of Birmingham",
      title:
        "New Study Indicates That We Are at a Catastrophic Ocean Warming “Tipping Point”",
      description:
        "A new study charts 45,000,000 years of Antarctic temperature change. Scientists have created the first charts of Antarctic ocean temperatures over the last 45 million...",
      url: "https://scitechdaily.com/new-study-indicates-that-we-are-at-a-catastrophic-ocean-warming-tipping-point/",
      source: "Scitechdaily | Science Space And Technology News 2017",
      image: null,
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T19:56:31+00:00",
    },
    {
      author: null,
      title:
        "Study: Pandemic disrupted city sustainability efforts, yet increased focus on initiatives",
      description:
        "The COVID-19 pandemic forced everyone to reexamine their priorities. Local governments were no exception, and a new study from the University of Kansas has found that while the pandemic did cause municipalities to adjust their focus on sustainability efforts, it did not devastate them, and in some cases, caused cities to put new emphasis on certain types of sustainability initiatives.",
      url: "https://phys.org/news/2022-11-pandemic-disrupted-city-sustainability-efforts.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/study-pandemic-disrupt.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T20:12:03+00:00",
    },
    {
      author: null,
      title: "Tracing tomatoes' health benefits to gut microbes",
      description:
        "Two weeks of eating a diet heavy in tomatoes increased the diversity of gut microbes and altered gut bacteria toward a more favorable profile in young pigs, researchers found.",
      url: "https://phys.org/news/2022-11-tomatoes-health-benefits-gut-microbes.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2019/tomatoplant.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-08T20:41:04+00:00",
    },
    {
      author: "ben.turner@futurenet.com (Ben Turner)",
      title:
        "Meta's new AI just predicted the shape of 600 million proteins in 2 weeks",
      description:
        "Many of the protein shapes are from organisms that are completely unknown to science.",
      url: "https://www.livescience.com/meta-predicts-600-million-protein-shapes/",
      source: "Live Science: The Most Interesting Articles",
      image: "http://cdn.mos.cms.futurecdn.net/NRkdGJKZnK64cjJ9xaLht.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-05T13:00:19+00:00",
    },
    {
      author: "Richard Sandomir",
      title: "Samuel L. Katz, a Developer of the Measles Vaccine, Dies at 94",
      description:
        "In 1956, when he began working with a small group in a Boston laboratory, measles was a major threat. Seven years later, lifesaving immunizations began.",
      url: "https://www.nytimes.com/2022/11/05/health/samuel-katz-dead.html",
      source: "The New York Times",
      image: null,
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-05T16:40:19+00:00",
    },
    {
      author: "Gabriel Popkin",
      title:
        "Is the Wood-Wide Web Real? Scientists Debate Whether Trees Really Talk.",
      description:
        "From Ted Lasso to TED Talks, the theory of the “wood-wide web” is everywhere, and some scientists argue that it is overblown and unproven.",
      url: "https://www.nytimes.com/2022/11/07/science/wood-wide-web-trees-fungi-talking.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/07/science/07sci-woodwideweb10/07sci-woodwideweb10-moth.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T10:00:38+00:00",
    },
    {
      author: "Maria Cramer",
      title: "The World’s Most-Visited Glaciers Could Soon Be Gone",
      description:
        "The U.N.’s cultural agency warns that ice sheets on Kilimanjaro, in the Dolomites and in Yosemite and Yellowstone may disappear by 2050, highlighting travel’s impact on climate change.",
      url: "https://www.nytimes.com/2022/11/07/travel/glaciers-melting-unesco.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/07/travel/07travel-glaciers-UNESCO-yellowstone/07travel-glaciers-UNESCO-yellowstone-moth.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T10:00:26+00:00",
    },
    {
      author: null,
      title: "Engineers develop a low-cost terahertz camera",
      description:
        "Terahertz radiation, whose wavelengths lie between those of microwaves and visible light, can penetrate many nonmetallic materials and detect signatures of certain molecules. These handy qualities could lend themselves to a wide array of applications, including airport security scanning, industrial quality control, astrophysical observations, nondestructive characterization of materials, and wireless communications with higher bandwidth than current cellphone bands.",
      url: "https://phys.org/news/2022-11-low-cost-terahertz-camera.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/mit-engineers-develop-2.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T13:35:04+00:00",
    },
    {
      author: null,
      title: "Research advances artificial enzyme engineering",
      description:
        "While corrosion resistance, durability and low cost make plastic a very efficient resource, one of its major drawbacks is the harm it poses to the environment. According to a report from Greenpeace U.S., 51 million tons of plastic waste were generated by households in the United States in 2021, with only 2.4 million tons recycled, making it a pressing concern to the well-being of the planet.",
      url: "https://phys.org/news/2022-11-advances-artificial-enzyme.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image: "https://scx1.b-cdn.net/csz/news/tmb/2020/chemistrylab.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T15:12:14+00:00",
    },
    {
      author: null,
      title:
        "Games of power: Scientists decode behavioral patterns of dominance between the sexes in mammals",
      description:
        "The stronger and more aggressive sex dominates the weaker sex. This simplistic view of male-female dominance relationships is common but falls short of the complexity of how dominance hierarchies are established in animal societies.",
      url: "https://phys.org/news/2022-11-games-power-scientists-decode-behavioral.html",
      source: "Phys.org - News And Articles On Science And Technology",
      image:
        "https://scx1.b-cdn.net/csz/news/tmb/2022/games-of-power-scienti.jpg",
      category: "science",
      language: "en",
      country: "us",
      published_at: "2022-11-07T15:47:03+00:00",
    },
  ],
};

export const sports = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 100,
    total: 10000,
  },
  data: [
    {
      author: "Kyle Wood",
      title: "Odds, Spread, Over/Under and Props: Pelicans-Lakers",
      description:
        "Spread, over/under and prop bets for Wednesday’s game between the favored and visiting Pelicans and the Lakers.",
      url: "https://www.si.com/betting/2022/11/02/odds-spread-over-under-props-pelicans-lakers",
      source: "Sports Illustrated",
      image:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Ch_1200%2Cq_auto:good%2Cw_1200/MTkzNDY3Mjc1OTA1MzQ1MjEz/zion-williamson.png",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T16:51:55+00:00",
    },
    {
      author: "News Feed",
      title:
        "Black: Oregon’s Seven McGee departure related to tweets about lack of snaps",
      description:
        "A Roundup of college football, men's and women's basketball, and other news stories from throughout the west.The post Black: Oregon&#8217;s Seven McGee departure related to tweets about lack of snaps appeared first on SuperWest Sports.",
      url: "https://superwestsports.com/black-oregons-seven-mcgee-departure-related-to-tweets-about-lack-of-snaps/",
      source: "Sportspac12",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T17:03:35+00:00",
    },
    {
      author: "Caretaker",
      title:
        "Plateau United FC 4-1 victors of Al Akhder SC in CAF Confederation Cup playoff 1st leg encounter",
      description:
        "Plateau United Football Club on Wednesday November 2, 2022 defeated Al Akhder SC 4-1 in a CAF Confederation Cup playoff 1st-leg encounter. A Mustapha Yuga headed goal in the 27th minute gave Plateau United FC the lead at the MKO Abiola Stadium, Abuja. Plateau United FC continued to press their Libyan opponents in search of &#8230;The post Plateau United FC 4-1 victors of Al Akhder SC in CAF Confederation Cup playoff 1st leg encounter appeared first on SportsRation.",
      url: "https://sportsration.com/plateau-united-fc-4-1-victors-of-al-akhder-sc-in-caf-confederation-cup-playoff-1st-leg-encounter/",
      source: "Sportsration: Nigeria Soccer | World Sports",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T17:19:45+00:00",
    },
    {
      author: "Cory Woodroof, Yardbarker",
      title: "Jaguars taking chance on WR Calvin Ridley could be major",
      description:
        "The Jacksonville Jaguars might've snagged a true No. 1 receiver at the trade deadline.  With the team trading a couple of conditional draft picks to the Atlanta Falcons for suspended wideout Calvin Ridley, the Jags made a sizeable investment into the future of its team.",
      url: "https://www.yardbarker.com/nfl/articles/jaguars_taking_chance_on_wr_calvin_ridley_could_be_major/s1_13132_38070215",
      source: "Yardbarker",
      image:
        "http://www.yardbarker.com/media/1/6/16e40aa9be3535d48f647d7e8b3c47d35bb0d0e7/thumb_16x9/jaguars-taking-chance-on-wr-calvin-ridley-major.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T17:29:22+00:00",
    },
    {
      author: "Abhishek Singh",
      title:
        "“Shouldn’t Even Put on This Jersey”: Dwight Howard Reveals Behind the Scenes of LeBron James’ Lakers Despite Being Excited to Play with Russ and AD",
      description:
        "Los Angeles Lakers registered their first win of the season against the Denver Nuggets on Sunday. The Lakers are now 1-5 in the league and expect to start a winning streak from now. However, the Lakers&#8217; early season results are reminiscent of last season, when they failed to make it to the playoffs. Despite LeBron&#8230;The post “Shouldn’t Even Put on This Jersey”: Dwight Howard Reveals Behind the Scenes of LeBron James’ Lakers Despite Being Excited to Play with Russ and AD appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nba-basketball-news-shouldnt-even-put-on-this-jersey-dwight-howard-reveals-behind-the-scene-for-lebron-james-lakers-despite-being-excited-to-play-with-russ-and-ad-russell-westbrook-anthony-davis/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/2021-10-30T050507Z_1184631802_MT1USATODAY17055352_RTRMADP_3_NBA-CLEVELAND-CAVALIERS-AT-LOS-ANGELES-LAKERS-473x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T18:21:56+00:00",
    },
    {
      author: "Peter FitzSimons",
      title:
        "Will these new sports gambling warnings pay off? You better believe it",
      description:
        "Bravo to the government for actually doing something to try and limit the scourge of problem gambling in this country.",
      url: "https://www.theage.com.au/sport/will-these-new-sports-gambling-warnings-pay-off-you-better-believe-it-20221102-p5buz0.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.2402%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_107/t_crop_custom/q_86%2Cf_jpg/83701041adb63bba3c2ec038641bc0a872b803c5",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-02T18:36:00+00:00",
    },
    {
      author: "Tushar Deogharkar",
      title:
        "Ronda Rousey’s Honest Confession Once Proved Arnold Schwarzenegger Was Right About the Former UFC Champion",
      description:
        "Ronda Rousey and Arnold Schwarzenegger have a great friendship. We have seen them several times praising each other. &#8216;The Baddest Woman on the Planet&#8217; was a fighter in the Bantamweight. Her opponents rarely saw round two.  However, once, &#8216;The Arm Collector&#8217; called her nature similar to one of Arnie’s most memorable characters. The current WWE&#8230;The post Ronda Rousey’s Honest Confession Once Proved Arnold Schwarzenegger Was Right About the Former UFC Champion appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/wwe-mma-bodybuilding-us-sports-ronda-rouseys-honest-confession-once-proved-arnold-schwarzenegger-was-right-about-the-former-ufc-champion/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/WhatsApp-Image-2022-11-02-at-17.41.41-474x315.jpeg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T18:45:53+00:00",
    },
    {
      author: "Tim Boyle",
      title:
        "Phillies are winning in 5 if these 3 Astros don’t have a big game",
      description:
        "The Philadelphia Phillies are winning the World Series in five games if these three Houston Astros stay silent in Game 4. The Houston Astros know a thing or two about making it to the World Series. No team in the American League has been as dominant as they have been since 2017 when they were [&#8230;]Phillies are winning in 5 if these 3 Astros don’t have a big game - FanSided - FanSided - Sports News, Entertainment, Lifestyle & Technology - 300+ Sites",
      url: "https://fansided.com/2022/11/02/phillies-win-3-astros-big-game/",
      source: "Fansided",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T18:46:40+00:00",
    },
    {
      author: "Daiemah Malik",
      title:
        "Justin Timberlake, Who Recently Joined Hands With Tiger Woods, is Also a Part-Owner of a Golf Tour With the 82-Time PGA Tour Winner",
      description:
        "Tiger Woods and Justin Timberlake are probably names that have echoed in all our houses, at least once. Well, as events shape, the duo is set to increase this very echo in the coming days. As per news suggests, recently, the two have collaborated to head a new venture together. Only time will tell what&#8217;s&#8230;The post Justin Timberlake, Who Recently Joined Hands With Tiger Woods, is Also a Part-Owner of a Golf Tour With the 82-Time PGA Tour Winner appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/golf-news-justin-timberlake-who-recently-joined-hands-with-tiger-woods-is-also-a-part-owner-of-a-golf-tour-with-the-82-time-pga-tour-winner/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/2022-07-15T175822Z_903106506_UP1EI7F1DX8M1_RTRMADP_3_GOLF-OPEN-435x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T19:00:34+00:00",
    },
    {
      author: "Arjun Sukumaran",
      title:
        "“I Couldn’t Believe It”: Golf Stories from Tom Brady’s Exploits of Ultra Competitive Men Showcase it Isn’t Just About the NFL for the GOAT",
      description:
        "In the turbulent storm that is Tom Brady&#8217;s personal life, the only stories coming out are of his past relationships, and future ones. But it is not that easy to forget that Brady has a passion outside of football. His exploits in golf leave many of his peers in stunned silence, as many of his&#8230;The post &#8220;I Couldn&#8217;t Believe It&#8221;: Golf Stories from Tom Brady&#8217;s Exploits of Ultra Competitive Men Showcase it Isn&#8217;t Just About the NFL for the GOAT appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nfl-golf-news-i-couldnt-believe-it-golf-stories-from-tom-bradys-exploits-of-ultra-competitive-men-showcase-it-isnt-just-about-the-nfl-for-the-goat/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/2022-10-23T203415Z_296113646_MT1USATODAY19288127_RTRMADP_3_NFL-TAMPA-BAY-BUCCANEERS-AT-CAROLINA-PANTHERS-473x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T19:00:32+00:00",
    },
    {
      author: "Jack Cunningham",
      title:
        "Man City 0-0 Sevilla LIVE: Pep Guardiola rings the changes for final Champions League group game as Cole Palmer and Rico Lewis start as Jesus Navas on bench for Etihad return",
      description:
        "Man City 0-0 Sevilla LIVE: Pep Guardiola rings the changes for final Champions League group game as Cole Palmer and Rico Lewis start as Jesus Navas on bench for Etihad return",
      url: "https://talksport.com/football/1234457/manchester-city-vs-sevilla-live-stream-date-kick-off-time-champions-league-how-to-watch-updates-tv-channel-team-news-haaland-guardiola/",
      source: "TalkSport",
      image: null,
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-02T20:00:17+00:00",
    },
    {
      author: "Simon Borg",
      title:
        "Champions League group tiebreakers: What happens if teams are tied on points?",
      description:
        "Find out who wins each tiebreaker if teams finish with equal points at the end of the Champions League group stage.",
      url: "https://www.sportingnews.com/us/soccer/news/champions-league-group-tiebreakers-points/1c5tkgy6fr3sx1jktb0s6cbpnk",
      source: "Sporting News",
      image:
        "https://library.sportingnews.com/2021-12/uefa-champions-league-trophy-logo-2021_84l47hzkhj8w1638vdjn70lei.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T20:27:00+00:00",
    },
    {
      author: "Ian Chadband",
      title:
        "‘Why do it in the first 18?’: De Minaur savours biggest win in Paris",
      description:
        "For so long one of the ‘nearly men’ of world tennis, Alex De Minaur has beaten a top-five ranked player at the 19th time of asking after overcoming Daniil Medvedev.",
      url: "https://www.theage.com.au/sport/tennis/why-do-it-in-the-first-18-de-minaur-savours-biggest-win-in-paris-20221103-p5bv68.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.2696%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_39/t_crop_custom/q_86%2Cf_jpg/c0fab2b1823d84bfe4a18093d8281b7b5a517f63",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-02T20:40:01+00:00",
    },
    {
      author: "Aayush Shah",
      title:
        "Ex-NFL Punter Pat McAfee is Going Hilariously Nuts After “American Professional Football League” Sanctions His Popular Show",
      description:
        "Pat McAfee is not only one of the best punters the league has seen but is also currently one of the biggest promoters of the NFL. The Pat McAfee Show has over 2 million subscribers on YouTube. His following is not only restricted to the content streaming channel. He has around 5 million followers on&#8230;The post Ex-NFL Punter Pat McAfee is Going Hilariously Nuts After &#8220;American Professional Football League&#8221; Sanctions His Popular Show appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nfl-news-ex-nfl-punter-pat-mcafee-is-going-hilariously-nuts-after-american-professional-football-league-sanctions-his-popular-show/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/https-www.si_.com-.image-MTc2ODg0NzE4MDIzNzQ3MTU1-pat-mcafee-560x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T21:16:09+00:00",
    },
    {
      author: "Shankha Shuvra Das",
      title:
        "“Better Than Those Plumbers”: Charles Barkley Roasting Celtics Duo Sends Shaquille O’Neal and Crew in Splits Causing Chaos Among Fans",
      description:
        "The ‘NBA on TNT’ delivers more than just an analysis of the game. With Charles Barkley and Shaquille O’Neal bantering with each other constantly, there are a lot of fun moments captured on tape in the show. O’Neal is one of the most fun characters that the NBA world and the internet know. The Lakers&#8230;The post “Better Than Those Plumbers”: Charles Barkley Roasting Celtics Duo Sends Shaquille O’Neal and Crew in Splits Causing Chaos Among Fans appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nba-basketball-news-better-than-those-plumbers-charles-barkley-roasting-celtics-duo-sends-shaquille-oneal-and-crew-in-splits-causing-chaos-among-fans/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1349417127-419x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T21:36:13+00:00",
    },
    {
      author: "Shriya Rajachandra",
      title:
        "“Anybody Who Thinks That Is a Damn Fool”: Infuriated Michael Jordan Lashed Out at Larry Bird and Magic Johnson Critics Over Bizarre Comparisons Before 1987",
      description:
        "For a large section of the basketball fraternity, there is no doubt that Michael Jordan is the greatest of all time. But in the 80s, this debate around the best of the best had a different narrative. Critics ranked Larry Bird and Magic Johnson higher than Jordan for they believed that Bird and Johnson carried&#8230;The post “Anybody Who Thinks That Is a Damn Fool”: Infuriated Michael Jordan Lashed Out at Larry Bird and Magic Johnson Critics Over Bizarre Comparisons Before 1987 appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nba-basketball-news-anybody-who-thinks-that-is-a-damn-fool-infuriated-michael-jordan-lashed-out-at-larry-bird-and-magic-johnson-critics-over-bizarre-comparisons-before-1987/",
      source: "Essentially Sports",
      image:
        "https://www.staging.essentiallysports.com/wp-content/uploads/GettyImages-75351596-478x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T22:09:19+00:00",
    },
    {
      author: "Mike Santa Barbara, Yardbarker",
      title: "Ben Simmons reportedly has come up in 'cursory' trade talks",
      description:
        "Heading in a new direction, the Nets may view a player with Simmons' skill set (defense-first/offensive distributor) as expendable.",
      url: "https://www.yardbarker.com/nba/articles/ben_simmons_reportedly_has_come_up_in_cursory_trade_talks/s1_13132_38071424",
      source: "Yardbarker",
      image:
        "http://www.yardbarker.com/media/b/e/be5825d692c58f7ffa78014c8752dab634049b22/thumb_16x9/ben-simmons-reportedly-cursory-trade-talks.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T22:29:15+00:00",
    },
    {
      author: "News",
      title:
        "De Minaur stuns petulant Medvedev in breakthrough victory in Paris",
      description:
        "Alex&#160;de&#160;Minaur, for so long a &#8216;nearly-man&#8217; of world tennis, has earned a major career breakthrough by defeating former world No.1 Daniil Medvedev in an epic affair at the Paris Masters. The Sydneysider, who has built an excellent career while always seemingly coming up just short against the true elite, earned his first-ever victory over a [&#8230;]",
      url: "https://www.theroar.com.au/2022/11/03/de-minaur-stuns-petulant-medvedev-in-breakthrough-victory-in-paris/",
      source: "The Roar | Sports Writers Blog",
      image: null,
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-02T22:54:45+00:00",
    },
    {
      author: "",
      title: "Champions League highlights: Maccabi Haifa vs Benfica",
      description:
        "Maccabi Haifa take on SL Benfica in the group stages of the 2022/23 UEFA Champions League.",
      url: "https://www.theage.com.au/sport/soccer/champions-league-highlights-maccabi-haifa-vs-benfica-20221103-p5bv9b.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/f57fd880c5616f70bc1aad4971a6fce41428930c",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-02T23:30:45+00:00",
    },
    {
      author: "Wilton Jackson",
      title: "Jaguars Spent Months Researching Calvin Ridley Before Trade",
      description:
        "Jacksonville was strategic in its move to acquire the suspended former Falcons wide receiver.",
      url: "https://www.si.com/nfl/2022/11/02/jaguars-spent-months-researching-calvin-ridley-before-trade",
      source: "Sports Illustrated",
      image:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Ch_1200%2Cq_auto:good%2Cw_1200/MTg4OTcwNTQ5MDMwOTU0NDUy/trent-baalke-.png",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T23:36:53+00:00",
    },
    {
      author: "Sportsnet Staff",
      title: "World Series on SN: Astros vs. Phillies in Game 4",
      description:
        "Bryce Harper&#8217;s first-inning home run sparked the Phillies to win Game 3 of the World Series. Can they do it again for Game 4? Watch as the World Series continues live on Sportsnet and SN NOW.The post Tavares unleashes thunderous one-timer to give Maple Leafs lead vs. Flyers appeared first on Sportsnet.ca.",
      url: "sportsnetca://app/event/13343",
      source: "Sportsnet",
      image: "https://www.sportsnet.ca/wp-content/uploads/2022/10/harper1.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-02T23:57:22+00:00",
    },
    {
      author: "",
      title: "Champions League highlights: Real Madrid v Celtic",
      description:
        "Real Madrid take on Celtic in the group stages of the 2022/23 UEFA Champions League.",
      url: "https://www.theage.com.au/sport/soccer/champions-league-highlights-real-madrid-v-celtic-20221103-p5bvan.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/403b097aac208163ac1692f2f55b326e64f99a62",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-03T00:46:15+00:00",
    },
    {
      author: "XtraTime",
      title:
        "IPL 2023: Punjab Kings name Shikhar Dhawan as the captain for new season",
      description:
        "Xtra Time Web Desk: Indian Premier League (IPL) franchise Punjab Kings on Wednesday named Shikhar Dhawan as the captain for the IPL 2023 season. Dhawan will replace Mayank Agarwal as&#8230;The post IPL 2023: Punjab Kings name Shikhar Dhawan as the captain for new season first appeared on XtraTime | To get the best and exclusive sporting news, keep watching XtraTime.",
      url: "https://xtratime.in/ipl-2023-punjab-kings-name-shikhar-dhawan-as-the-captain-for-new-season/",
      source: "Xtratime",
      image: null,
      category: "sports",
      language: "en",
      country: "in",
      published_at: "2022-11-03T01:02:13+00:00",
    },
    {
      author: "Corey Crisan",
      title: "Thursday: Ask Corey about Pitt football/hoops, Steelers",
      description: "Thursday: Ask Corey about Pitt football/hoops, Steelers",
      url: "https://www.dkpittsburghsports.com/2022/11/02/ask-corey-crisan-about-pitt-football-hoops-volleyball-steelers-live-qs-cdc",
      source: "Dk Pittsburgh Sports News",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T01:30:06+00:00",
    },
    {
      author: "Sean Keane, Yardbarker",
      title: "Kyrie Irving, Nets donate $500K each to anti-hate causes",
      description:
        "The Brooklyn Nets and the ADL announced Irving and the team would each make donations of $500,000.",
      url: "https://www.yardbarker.com/nba/articles/kyrie_irving_nets_donate_500k_each_to_anti_hate_causes/s1_13132_38071920",
      source: "Yardbarker",
      image:
        "http://www.yardbarker.com/media/d/b/db0e4bc08b100e5be57cce88616db74cd21def39/thumb_16x9/apr-25-2022-brooklyn-new-york-usa-brooklyn-nets.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T01:42:37+00:00",
    },
    {
      author: "News Feed",
      title:
        "What BYU can do against Boise State to restore some hope in BYU’s future",
      description:
        "A Roundup of college football, men's and women's basketball, and other news stories from throughout the west.The post What BYU can do against Boise State to restore some hope in BYU&#8217;s future appeared first on SuperWest Sports.",
      url: "https://superwestsports.com/what-byu-can-do-against-boise-state-to-restore-some-hope-in-byus-future/",
      source: "Sportspac12",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T02:41:43+00:00",
    },
    {
      author: "Mike Santa Barbara, Yardbarker",
      title:
        "Four Astros pitchers combine to throw second no-hitter in World Series history",
      description:
        "In the 118-year history of the World Series, only the late Yankees hurler, Don Larsen, in 1956, had thrown a no-hitter in the Fall Classic. ",
      url: "https://www.yardbarker.com/mlb/articles/four_astros_pitchers_combine_to_throw_second_no_hitter_in_world_series_history/s1_13132_38072227",
      source: "Yardbarker",
      image:
        "http://www.yardbarker.com/media/4/9/499d3d1c5ef5468322853b8100a9f4d69594fa64/thumb_16x9/four-astros-pitchers-combine-throw-second-hitter.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T04:04:31+00:00",
    },
    {
      author: "Nick Selbe",
      title: "Baseball World Reacts to Astros Game 4 No-Hitter vs. Phillies",
      description:
        "Houston pulled off the improbable, throwing the second no-hitter in World Series history.",
      url: "https://www.si.com/mlb/2022/11/03/baseball-world-reacts-to-astros-world-series-game-4-no-hitter-vs-phillies",
      source: "Sports Illustrated",
      image:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_1200%2Cq_auto:good%2Cw_1200/MTkzNDc4NTM1OTY3NDE4MDQ1/astros-no-hitter.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T04:26:35+00:00",
    },
    {
      author: "Saunak Nag",
      title:
        "WWE News: Major update on plans for WWE Crown Jewel amidst warnings regarding “Imminent Attacks”",
      description:
        "WWE Crown Jewel: WWE Crown Jewel Live 2022: The news broke yesterday that there are possibilities of an attack from Iran on&#8230;The post WWE News: Major update on plans for WWE Crown Jewel amidst warnings regarding “Imminent Attacks” first appeared on Inside Sport India.",
      url: "https://www.insidesport.in/wwe-news-major-update-on-plans-for-wwe-crown-jewel-amidst-warnings-regarding-imminent-attacks/",
      source: "Insidesport",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T07:09:47+00:00",
    },
    {
      author: "Sam May",
      title:
        "‘Wilfried Zaha loves Crystal Palace but he could show his talent elsewhere’ – Mile Jedinak believes Eagles star could be on the move amid Arsenal, Chelsea and Liverpool links",
      description:
        "‘Wilfried Zaha loves Crystal Palace but he could show his talent elsewhere’ – Mile Jedinak believes Eagles star could be on the move amid Arsenal, Chelsea and Liverpool links",
      url: "https://talksport.com/football/1235815/wilfried-zaha-transfer-crystal-palace-mile-jedinak-liverpool/",
      source: "TalkSport",
      image: null,
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T07:55:11+00:00",
    },
    {
      author: "Jack Rathborn",
      title:
        "Arsenal vs Zurich live stream: How to watch Europa League fixture online and on TV tonight",
      description:
        "Everything you need to know ahead of the Europa League group stage finale",
      url: "https://www.independent.co.uk/sport/football/arsenal-zurich-live-stream-watch-online-b2215816.html",
      source: "The Independent - Sports",
      image:
        "https://static.independent.co.uk/2022/11/01/14/SOCCER%20Arsenal%201556475.jpg?width=1200&auto=webp",
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T07:45:54+00:00",
    },
    {
      author: "Dejan Kovacevic",
      title:
        "Kovacevic: Yet another multiple-goal collapse, faults with every phase ... this stuff won't just fix itself",
      description:
        "'I believe.' This was Evgeni Malkin late Wednesday night in a largely empty locker room at KeyBank Center, minutes after the Penguins' most recent mind-blowing, multiple-goal-lead-blowing collapse, a 6-3 loss to the Sabres that ... I mean, I'm not even sure I've processed it yet on its own merit, let alone when combined with what I'd witnessed less than 24 hours earlier.",
      url: "https://www.dkpittsburghsports.com/2022/11/02/penguins-sabres-jaromir-jagr-salute-losing-streak-column-opinion-nhl-dk",
      source: "Dk Pittsburgh Sports News",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T08:20:07+00:00",
    },
    {
      author: "Afreen Khan",
      title:
        "“Need to take care”: Fans concerned as BLACKPINK’s Jisoo performs with a swollen lymph node",
      description:
        "“Need to take care”: Fans concerned as BLACKPINK’s Jisoo performs with a swollen lymph node",
      url: "https://www.sportskeeda.com/pop-culture/news-need-take-care-fans-concerned-blackpink-s-jisoo-performs-swollen-lymph-node?utm_source=feed&utm_medium=referral&utm_campaign=sportskeeda",
      source: "Sportskeeda",
      image:
        "https://static.sportskeeda.com/editor/2022/11/81d8e-16674589921221-1920.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T09:05:20+00:00",
    },
    {
      author: "Anmol David",
      title: "Vex vs Allay in Minecraft: How different are the two mobs?",
      description: "Vex vs Allay in Minecraft: How different are the two mobs?",
      url: "https://www.sportskeeda.com/minecraft/vex-vs-allay-minecraft-how-different-two-mobs?utm_source=feed&utm_medium=referral&utm_campaign=sportskeeda",
      source: "Sportskeeda",
      image:
        "https://static.sportskeeda.com/editor/2022/11/3066f-16674564225874-1920.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T09:05:20+00:00",
    },
    {
      author: "Karan Tyagi",
      title:
        "BetRivers Promo Code: Get up to $500 in free bets on today's NBA games - November 3 | 2022-23 NBA Season",
      description:
        "BetRivers Promo Code: Get up to $500 in free bets on today's NBA games - November 3 | 2022-23 NBA Season",
      url: "https://www.sportskeeda.com/sports-betting/betrivers-promo-code-get-500-free-bets-today-s-nba-games-november-3-2022-23-nba-season?utm_source=feed&utm_medium=referral&utm_campaign=sportskeeda",
      source: "Sportskeeda",
      image:
        "https://static.sportskeeda.com/editor/2022/11/2933e-16674555621021-1920.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T09:05:20+00:00",
    },
    {
      author: "Matthew Futterman",
      title: "American Marathon Runners Are Faster Than Ever",
      description:
        "American women have been breaking the national marathon record this year. Conner Mantz, a 25-year-old from Utah, had a stellar marathon debut. But can they win major races?",
      url: "https://www.nytimes.com/2022/11/03/sports/marathon-runners-women.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/11/03/sports/03nycm-american-records-sisson/03nycm-american-records-sisson-moth.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T09:00:28+00:00",
    },
    {
      author: "Josh Fordham",
      title:
        "The last time Antonio Conte won a Champions League knockout match, Harry Kane had not yet scored a Premier League goal for Tottenham",
      description:
        "The last time Antonio Conte won a Champions League knockout match, Harry Kane had not yet scored a Premier League goal for Tottenham",
      url: "https://talksport.com/football/1236145/tottenham-antonio-conte-champions-league-last16-knockout-record-harry-kane-premier-league-goal/",
      source: "TalkSport",
      image: null,
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T09:42:12+00:00",
    },
    {
      author: "Tom Lunn",
      title:
        "talkSPORT Thursday horse racing tips: Daily picks from Newbury, Ludlow and Sedgefield",
      description:
        "talkSPORT Thursday horse racing tips: Daily picks from Newbury, Ludlow and Sedgefield",
      url: "https://talksport.com/sport/racing/1236166/talksport-thursday-horse-racing-tips-daily-newbury-ludlow-sedgefield/",
      source: "TalkSport",
      image: null,
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T10:00:31+00:00",
    },
    {
      author: "Jack Rathborn",
      title:
        "‘Tenacious’ Quinnen Williams embraces Von Miller advice to spark Jets resurgence",
      description:
        "Exclusive interview: The former Alabama star has broken out as one of the league’s most destructive players this season with the Jets competing for a play-off berth",
      url: "https://www.independent.co.uk/sport/nfl/quinnen-williams-new-york-jets-von-miller-b2216209.html",
      source: "The Independent - Sports",
      image:
        "https://static.independent.co.uk/2022/11/02/15/GettyImages-1242468036.jpg?width=1200&auto=webp",
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T09:57:04+00:00",
    },
    {
      author: "Shashank Wankhede",
      title:
        "‘Mayweather Hating Is Going to Post His Car Collection’: Canelo Alvarez Flaunts His $2.5 Million Ferrari, Draws Wild Reactions",
      description:
        "Floyd Mayweather was reigning the world of boxing by making the biggest PPV numbers possible. After him, Canelo Alvarez became the crown prince to make boxing fights as exciting and expensive as possible. The latter is undoubtedly the top boxer of our generation, and his successful career has earned him millions of dollars from his&#8230;The post ‘Mayweather Hating Is Going to Post His Car Collection’: Canelo Alvarez Flaunts His $2.5 Million Ferrari, Draws Wild Reactions appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/boxing-news-mayweather-hating-is-going-to-post-his-car-collection-canelo-alvarez-flaunts-his-2-5-million-ferrari-draws-wild-reactions/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/canelo-alvarez-is-selling-his-2018-bugatti-chiron-a-true-garage-queen-196840_1-444x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T11:15:21+00:00",
    },
    {
      author: "Mubhaswara Ahamed",
      title:
        "“Everyone Has Different Genetics”: 45-Year-Old Tom Brady’s Shocking Comeback After Retirement Was Defended by Jay Cutler, Earlier This Year",
      description:
        "As an athlete, if you are off the field, then the speculations that you have retired are not far away. For an athlete, as much as their success gets discussed, people also talk about their retirement. As 3x Arnold Classic champion and 4x Mr. Olympia champion, Jay Cutler sat for a podcast episode earlier this&#8230;The post “Everyone Has Different Genetics”: 45-Year-Old Tom Brady’s Shocking Comeback After Retirement Was Defended by Jay Cutler, Earlier This Year appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/us-sports-news-bodybuilding-news-everyone-has-different-genetics-45-year-old-tom-bradys-shocking-comeback-after-retirement-was-defended-by-jay-cutler-earlier-this-year/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/Tom-Brady-sad-477x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T11:15:19+00:00",
    },
    {
      author: "Neha Joshi",
      title:
        "Hall of Famer Peyton Manning Was the Target of a Playful Jab From Eli Manning",
      description:
        "The former New York Giants quarterback never fails to make fun of his older brother. Eli and Peyton Manning, the brother who had stellar careers in the NFL, complete side hustles after they achieved impressive success. But that will not keep the 41-year-old QB to make fun of his older Hall of Famer brother. On&#8230;The post Hall of Famer Peyton Manning Was the Target of a Playful Jab From Eli Manning appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nfl-news-hall-of-famer-peyton-manning-was-the-target-of-a-playful-jab-from-eli-manning/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1344694834-455x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T11:15:12+00:00",
    },
    {
      author: "Pratishtha Prakash",
      title:
        "‘I Don’t Know What’s Going On In Her.’- Angelique Kerber on Serena Williams’ Comeback to Professional Tennis",
      description:
        "Serena Williams and Roger Federer&#8217;s retirements from tennis this year marked the beginning of the end of an era for the sport. However, Williams&#8217; comments regarding a comeback after her retirement piqued the interest of tennis professionals and spectators alike. Angelique Kerber recently discussed her views on Serena Williams&#8217; return to competitive tennis. The American&#8230;The post ‘I Don’t Know What’s Going On In Her.’- Angelique Kerber on Serena Williams’ Comeback to Professional Tennis appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/wta-tennis-news-i-dont-know-whats-going-on-in-her-angelique-kerber-on-serena-williams-comeback-to-professional-tennis/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/20200713141300/angelique-kerber-at-2018-wta-qatar-open-press-conference-in-doha-02-14-2018-2-1-454x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T11:50:11+00:00",
    },
    {
      author: "Krishnendu Banerjee",
      title:
        "Imran Khan SHOT: Ex Pakistan PM & WC winning captain Imran Khan injured as shots fired in Islamabad rally, Follow LIVE Updates",
      description:
        "Imran Khan SHOT: Imran Khan Health Updates: Former Pakistan Prime Minister and World Cup winning captain Imran Khan has suffered injuries after&#8230;The post Imran Khan SHOT: Ex Pakistan PM & WC winning captain Imran Khan injured as shots fired in Islamabad rally, Follow LIVE Updates first appeared on Inside Sport India.",
      url: "https://www.insidesport.in/imran-khan-shot-ex-pakistan-pm-wc-winning-captain-imran-khan-injured-as-shots-fired-in-islamabad-rally-follow-live-updates/",
      source: "Insidesport",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T11:57:17+00:00",
    },
    {
      author: "Soumya Bontra",
      title:
        "“Have Really Tiny Legs”: Legend Michael Phelps Was Rejected by Basketball Coach Due to His Disproportionate Body in 2016",
      description:
        "US swimmer Michael Phelps is one of the greatest athletes in the sporting world. Phelps is a 28-time Olympic medalist and holds several Olympic records. He has also won 23 Olympic gold medals, the most by any athlete in tournament history. With broad shoulders and very long arms, Phelps&#8217; physique is a perfect fit for&#8230;The post “Have Really Tiny Legs”: Legend Michael Phelps Was Rejected by Basketball Coach Due to His Disproportionate Body in 2016 appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/us-sports-news-olympics-news-swimming-news-basketball-news-have-really-tiny-legs-legend-michael-phelps-was-rejected-by-basketball-coach-due-to-his-disproportionate-body-in-2016/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-887992540-419x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T12:00:35+00:00",
    },
    {
      author: "Murray Wenzel",
      title:
        "Donnell Wallam shines as Diamonds secure sweep of series against England",
      description:
        "Even the English were gushing over Wallam after the Diamonds shooter brushed aside weeks of scrutiny to help Australia to a 3-0 series win.",
      url: "https://www.theage.com.au/sport/netball/donnell-wallam-shines-as-diamonds-secure-sweep-of-series-against-england-20221103-p5bvhk.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.22243226212980463%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_81/t_crop_custom/q_86%2Cf_jpg/99e867ef67f2c0fd21b72a7e0121d2df81e3b8fa",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-03T12:02:11+00:00",
    },
    {
      author: "Guardian sport",
      title: "Hull confirm Liam Rosenior as head coach on contract to 2025",
      description:
        "Rosenior was removed as interim Derby manager in SeptemberHull, who sacked Shota Arveladze, are 21st in ChampionshipHull City have confirmed the appointment of Liam Rosenior as their head coach. The former Derby manager has signed a two-and-a-half-year contract at the club where he played from 2010 to 2015.Rosenior joins with Hull 21st in the Championship after Tuesday’s 3-1 defeat by Middlesbrough, which he watched from the stands. The 38-year-old was removed as Derby manager in late September. He had been in interim charge for 12 games after Wayne Rooney left, having assisted the former...",
      url: "https://www.theguardian.com/football/2022/nov/03/hull-confirm-liam-rosenior-as-head-coach-on-contract-to-2025",
      source: "The Guardian",
      image:
        "https://i.guim.co.uk/img/media/99d216da83fe50f09c56a2584e3acf9f41ef7287/0_337_3500_2099/master/3500.jpg?width=140&quality=85&auto=format&fit=max&s=f4cd6aa34c6378518844459d2dec5f6b",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T12:45:51+00:00",
    },
    {
      author: "Mubhaswara Ahamed",
      title:
        "“Was Ready to Tear Up Her Intestine”: Simone Biles and Gymnastics Fans React to Toddler’s Obsession With the GOAT",
      description:
        "Simone Biles was just six years old when she started her gymnastics journey. The young girl from Ohio, under the guidance of coach Aimee Boorman, began to learn the sport&#8217;s nuances. Within a short time, she climbed up the success ladder. She did not just mark her presence on the vault but also went on&#8230;The post “Was Ready to Tear Up Her Intestine”: Simone Biles and Gymnastics Fans React to Toddler’s Obsession With the GOAT appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/us-sports-news-olympics-news-gymnastics-news-was-ready-to-tear-up-her-intestine-simone-biles-and-gymnastics-fans-react-to-toddlers-obsession-with-the-goat/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/WhatsApp-Image-2022-09-29-at-14.54.30-375x315.jpeg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T12:45:30+00:00",
    },
    {
      author: null,
      title: "Ibra hits out at Mbappe's decision to stay at PSG",
      description:
        'Zlatan Ibrahimovic has questioned Kylian Mbappe\'s decision to stay at Paris Saint-Germain and warned him that "you are never bigger than a club."',
      url: "https://www.espn.com/soccer/paris-saint-germain--frapsg/story/4789514/zlatan-ibrahimovic-hits-out-at-kylian-mbappes-psg-extension-you-are-never-bigger-than-a-club",
      source: "ESPN",
      image: "https://a.espncdn.com/photo/2022/0323/r990234_1296x729_16-9.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T13:10:14+00:00",
    },
    {
      author: "Jacob Camenker",
      title:
        "Aaron Rodgers injury update: Packers QB says thumb isn't yet feeling better despite rehab",
      description:
        "It looks like the Packers are going to have to beat the Lions with their quarterback at less than 100 percent.",
      url: "https://www.sportingnews.com/us/nfl/news/aaron-rodgers-injury-update-packers-qb-thumb/k0myd7hkgniemoargkfkh4sk",
      source: "Sporting News",
      image:
        "https://library.sportingnews.com/2022-10/Aaron%20Rodgers%20101622.jpeg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T13:45:32+00:00",
    },
    {
      author: "Vishwesha Kumar",
      title:
        "“My $40 Haircut Costs More Than Yours”: NBA Fans Left in Shambles as Lakers Star Patrick Beverly Unveils Bizarre Prices",
      description:
        "NBA and barbershops have been closely connected to each other for years. Players now have personal barbers for themselves and they are very selective about them. However, the rates have also skyrocketed over the years. And Lakers star Patrick Beverley left the NBA world in shambles after he complained about bizarre prices. Beverley moved to&#8230;The post &#8220;My $40 Haircut Costs More Than Yours&#8221;: NBA Fans Left in Shambles as Lakers Star Patrick Beverly Unveils Bizarre Prices appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nba-basketball-news-my-40-haircut-costs-more-than-yours-nba-fans-left-in-shambles-as-lakers-star-patrick-beverly-unveils-bizarre-prices/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/2022-09-26T220624Z_1315532126_MT1USATODAY19123879_RTRMADP_3_NBA-LOS-ANGELES-LAKERS-MEDIA-DAY-473x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T13:45:18+00:00",
    },
    {
      author: "Mahima Verma",
      title:
        "‘I Threw Up and I Am Heartbroken’- Former Australian Tennis Star Pens a Strong Message After Chinese Father Beats Up His Daughter on the Tennis Court",
      description:
        "Jelena Dokic, the retired Australian tennis professional, went through hell during her early days. She faced abuse from her father, who wanted her to become the best professional in tennis. In her autobiography, she mentioned how her father whipped her with a leather belt over a slight drop in performance.  Dokic has been outspoken about&#8230;The post ‘I Threw Up and I Am Heartbroken’- Former Australian Tennis Star Pens a Strong Message After Chinese Father Beats Up His Daughter on the Tennis Court appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/wta-tennis-news-i-threw-up-and-i-am-heartbroken-former-australian-tennis-star-pens-a-strong-message-after-chinese-father-beats-up-his-daughter-on-the-tennis-court/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/WhatsApp-Image-2022-11-03-at-5.31.09-PM-261x315.jpeg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T14:10:31+00:00",
    },
    {
      author: "Josh Wilson",
      title:
        "Dusty Baker explains why he pulled Cristian Javier from a no-hitter",
      description:
        "Astros Manager Dusty Baker defended and explained his decision to pull Cristian Javier from a no-hitter in Game 4 of the World Series.&#160; Pulling a pitcher from an in-progress no-hitter is always controversial. That controversy only gets inflated when it&#8217;s on the stage of the World Series. Houston Astros manager Dusty Baker had a tough [&#8230;]Dusty Baker explains why he pulled Cristian Javier from a no-hitter - FanSided - FanSided - Sports News, Entertainment, Lifestyle & Technology - 300+ Sites",
      url: "https://fansided.com/2022/11/03/dusty-baker-explains-why-pulled-cristian-javier-no-hitter/",
      source: "Fansided",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T14:22:30+00:00",
    },
    {
      author: "Abhishek Singh",
      title:
        "‘Been Dealing With This Sh*t for Years’: Floyd Mayweather’s Former Manager Shredded Into Pieces After Being Blamed for $50 Million Debacle by Boxing Icon",
      description:
        "Looked upon as one of the most exciting fights of the current era, between Terence Crawford and Errol Spence Jr, fell apart after months of talks earlier this week because they could not sort out the business aspect of the event. After the negotiation drama ended, the former undisputed Junior Welterweight champion took to Instagram&#8230;The post ‘Been Dealing With This Sh*t for Years’: Floyd Mayweather’s Former Manager Shredded Into Pieces After Being Blamed for $50 Million Debacle by Boxing Icon appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/boxing-news-been-dealing-with-this-sht-for-years-floyd-mayweathers-former-manager-shredded-into-pieces-after-being-blamed-for-50-million-debacle-by-boxing-icon/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1322409755-473x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T14:30:52+00:00",
    },
    {
      author: "Anurag Gusain",
      title:
        "Serena Williams’ Husband Alexis Ohanian Recalls a Powerful Conversation on Why He Resigned From Reddit After Looking at the Number of Black Candidates in Companies",
      description:
        "The American internet entrepreneur, Alexis Ohanian, is known for impeccable achievements in his entrepreneurial projects. Ohanian has overcome many hardships and challenges by working during his entrepreneurial journey. The tech figure, along with his college friend, founded the popular online community platform, Reddit. The online community project was a huge success for Ohanian as Reddit&#8230;The post Serena Williams’ Husband Alexis Ohanian Recalls a Powerful Conversation on Why He Resigned From Reddit After Looking at the Number of Black Candidates in Companies appeared first on...",
      url: "https://www.essentiallysports.com/wta-tennis-news-serena-williams-husband-alexis-ohanian-recalls-a-powerful-conversation-on-why-he-resigned-from-reddit-after-looking-at-the-number-of-black-candidates-in-companies/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/alexis-ohanian-1-474x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T14:30:31+00:00",
    },
    {
      author: "Josh Fordham",
      title:
        "Ben Chilwell ‘out of World Cup and could miss several months for Chelsea’ as he appeared to tell England teammate Mason Mount ‘it’s popped’ after hamstring injury",
      description:
        "Ben Chilwell ‘out of World Cup and could miss several months for Chelsea’ as he appeared to tell England teammate Mason Mount ‘it’s popped’ after hamstring injury",
      url: "https://talksport.com/football/1236473/ben-chilwell-out-world-cup-hamstring-popped-injury-chelsea/",
      source: "TalkSport",
      image: null,
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T14:30:46+00:00",
    },
    {
      author: null,
      title: "L'ville hoops, ex-coaches avoid major sanctions",
      description:
        "An independent panel has spared Louisville basketball -- and former coaches Rick Pitino and Chris Mack -- major penalties from NCAA allegations leveled in the aftermath of a federal investigation of corruption in college basketball.",
      url: "https://www.espn.com/mens-college-basketball/story/_/id/34939286/louisville-basketball-former-coaches-avoid-major-sanctions",
      source: "ESPN",
      image: "https://a.espncdn.com/photo/2015/1008/r15084_1296x729_16-9.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T15:10:12+00:00",
    },
    {
      author: "BN Staff",
      title:
        "Panel: Which of the great Ukrainians, Vasiliy Lomachenko and Oleksandr Usyk, do you prefer to watch and why?",
      description:
        "This week's panellists were asked to pick either Vasiliy Lomachenko or Oleksandr Usyk",
      url: "https://www.boxingnewsonline.net/panel-which-of-the-great-ukrainians-vasiliy-lomachenko-and-oleksandr-usyk-do-you-prefer-to-watch-and-why/",
      source: "Boxing News",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T15:18:30+00:00",
    },
    {
      author: "Madhurjya Bhuyan",
      title:
        "Houston Astros Star Justin Verlander and His Supermodel Wife Kate Upton Embrace Royal Attires to Ring in Halloween",
      description:
        "The Houston Astros are participating in the World Series and Justin Verlander made baseball history in the first game. Verlander was the starting pitcher scheduled to open, and so he began the proceedings. He became the only second pitcher in MLB history to pitch in a World Series game in three different decades. However, with&#8230;The post Houston Astros Star Justin Verlander and His Supermodel Wife Kate Upton Embrace Royal Attires to Ring in Halloween appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/mlb-baseball-news-houston-astros-star-justin-verlander-and-supermodel-wife-kate-upton-embrace-royal-attires-to-ring-in-halloween/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/Justin-Verlander-with-Kate-Upton-Featured-Image-420x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T15:32:47+00:00",
    },
    {
      author: "Breandán Ó hUallacháin",
      title: "Ireland Team To Play South Africa Named",
      description:
        "&#160;7&#160;total views, &#160;7&#160;views today The Ireland match day 23 to take on reigning Rugby World Cup Champions South Africa in the opening fixture of the Bank of Ireland Nations Series on Saturday has been named.Munster&#8217;s Conor Murray will earn his 100th Ireland cap this weekend. He is one of only five players who started the [&#8230;]The post Ireland Team To Play South Africa Named appeared first on SportsNewsIreland.",
      url: "https://www.sportsnewsireland.com/news/ireland-team-to-play-south-africa-named/",
      source: "Sports News Ireland",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T15:31:55+00:00",
    },
    {
      author: "Devyani Sharma",
      title:
        "Major Reveal About Dale Earnhardt Jr’s Reluctance To Enter The Cup Series – “Do our families want to remain in racing?”",
      description:
        "The Earnhardt family has always been passionate about NASCAR, be it Dale Earnhardt Sr, Dale Earnhardt Jr, or Kelley Earnhardt Miller. And on several occasions, they have shared their vision of seeing the sport grow beyond its current boundaries. However, keeping up with that passion is not easy and sometimes not financially viable. Kelley Earnhardt&#8230;The post Major Reveal About Dale Earnhardt Jr&#8217;s Reluctance To Enter The Cup Series &#8211; &#8220;Do our families want to remain in racing?&#8221; appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nascar-news-major-reveal-about-dale-earnhardt-jrs-reluctance-to-enter-the-cup-series-do-our-families-want-to-remain-in-racing/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/Dale-Earnhardt-Jr-and-Kelley-Earnhardt-323x315.png",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T15:45:56+00:00",
    },
    {
      author: "Chris Mueller",
      title: "NFL Week 9: Picks and preview",
      description:
        "Can Seattle keep it going? Will there be any further separation in the middle of the pack? And will things get even worse for struggling traditional powers like Green Bay? Let’s get to the games.",
      url: "https://www.yardbarker.com/nfl/articles/nfl_week_9_picks_and_preview/s1__38074183",
      source: "Yardbarker",
      image:
        "http://www.yardbarker.com/media/d/d/dd83c3586c4cb68bc2922ee979ee5f3baf7861c8/thumb_16x9/nfl-week-9-picks-preview.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T16:02:02+00:00",
    },
    {
      author: "Daniela Perez",
      title:
        "Phillies’ Schwarber on Being No-Hit: ‘I Really Don’t Give a S---’",
      description:
        "Astros right-hander Cristian Javier and three other pitchers led Houston to a series-tying win with the second no-hitter in World Series history.",
      url: "https://www.si.com/mlb/2022/11/03/phillies-kyle-schwarber-no-hitter-astros-world-series-game-4",
      source: "Sports Illustrated",
      image:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_1200%2Cq_auto:good%2Cw_1200/MTkzNDg4MjUyNTI1NjE4NDA0/kyle-schwarber.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T16:06:46+00:00",
    },
    {
      author: "Dhruv George",
      title:
        "“Wall Cop” Joey Logano Backs Kyle Larson’s ‘Embarassing’ Take on Ross Chastain’s Daredevilry",
      description:
        "Following the Cup race at Martinsville, Ross Chastain was all that anybody could talk about. This was because he pulled off a daredevil stunt to steal a Championship 4 spot. The move has been much debated by his peers, and sides have clearly been taken, with some praising him and others criticising him. Kyle Larson&#8230;The post &#8220;Wall Cop&#8221; Joey Logano Backs Kyle Larson&#8217;s &#8216;Embarassing&#8217; Take on Ross Chastain&#8217;s Daredevilry appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nascar-news-wall-cop-joey-logano-gives-reasoning-behind-kyle-larsons-embarrassing-take-on-ross-chastains-move/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1437778973-473x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T16:15:30+00:00",
    },
    {
      author: "Sahil Sood",
      title:
        "‘Next for Jake Paul’: Fans in Frenzy as 315-Pound Boxing Icon Accidentally Knocks Out the Referee in Resurfaced Clip",
      description:
        "During the 1990s, Eric Esch, better known by his nickname, Butterbean was an icon and a knockout artist, also a top-drawer attraction for the sport. The over 300-pound phenom has been in over 90 professional boxing matches in his career and even competed in MMA in the latter half of his career. Butterbean mainly garnered&#8230;The post ‘Next for Jake Paul’: Fans in Frenzy as 315-Pound Boxing Icon Accidentally Knocks Out the Referee in Resurfaced Clip appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/boxing-news-next-for-jake-paul-fans-in-frenzy-as-315-pound-boxing-icon-accidentally-knocks-out-the-referee-in-resurfaced-clip/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot-2022-11-03-155827-317x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T16:44:17+00:00",
    },
    {
      author: "Steve DelVecchio, Larry Brown Sports",
      title: "Joe Flacco shares his disappointment with Jets",
      description:
        "Joe Flacco began the season as the starting quarterback of the New York Jets while Zach Wilson was recovering from a knee injury.",
      url: "https://www.yardbarker.com/nfl/articles/joe_flacco_shares_his_disappointment_with_jets/s1_127_38074514",
      source: "Yardbarker",
      image:
        "http://www.yardbarker.com/media/6/2/6261e5432a7ad75ebb69a467dabe77fff32d579c/thumb_16x9/joe-flacco-shares-his-disappointment-jets.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T17:07:50+00:00",
    },
    {
      author: "James Benge",
      title:
        "Arsenal vs. Zurich live stream: Europa League pick, TV channel, how to watch online, odds, start time",
      description: "The Gunners bid to secure top spot in Group A",
      url: "https://www.cbssports.com/soccer/news/arsenal-vs-zurich-live-stream-europa-league-pick-tv-channel-watch-online-odds-start-time/",
      source: "CBSSports.com",
      image:
        "https://sportshub.cbsistatic.com/i/2022/11/02/1d7b268f-c871-4a02-9753-2a07ab87a841/arsenal.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T17:05:42+00:00",
    },
    {
      author: "Connor Andrews",
      title:
        "Red Bull Formula 1 car hits the streets of Las Vegas ahead of launch event headlined by Lewis Hamilton as hotel prices show price increase of up to 733 per cent for 2023 Grand Prix",
      description:
        "Red Bull Formula 1 car hits the streets of Las Vegas ahead of launch event headlined by Lewis Hamilton as hotel prices show price increase of up to 733 per cent for 2023 Grand Prix",
      url: "https://talksport.com/sport/motorsport/1236628/formula-1-las-vegas-red-bull-lewis-hamilton-launch-event/",
      source: "TalkSport",
      image: null,
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T17:23:40+00:00",
    },
    {
      author: "News Feed",
      title:
        "Canzano: Pac-12 must know a good deal when it sees one + Week 10 game picks",
      description:
        "A Roundup of college football, men's and women's basketball, and other news stories from throughout the west.The post Canzano: Pac-12 must know a good deal when it sees one + Week 10 game picks appeared first on SuperWest Sports.",
      url: "https://superwestsports.com/canzano-pac-12-must-know-a-good-deal-when-it-sees-one-week-10-game-picks/",
      source: "Sportspac12",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T17:27:46+00:00",
    },
    {
      author: "Adam Gretz, Yardbarker",
      title:
        "Duke's Mayo Bowl seeking new 'mayo dumpers' after last year's mess",
      description:
        "Hopefully the winning coach is able to get the mayo bath without taking the hit to the head along with it. ",
      url: "https://www.yardbarker.com/college_football/articles/dukes_mayo_bowl_seeking_new_mayo_dumpers_after_last_years_mess/s1_13132_38074768",
      source: "Yardbarker",
      image:
        "http://www.yardbarker.com/media/5/2/526881eba9886d1aa32f3f6f38431bd55768ebc3/thumb_16x9/dukes-mayo-bowl-seeking-new-mayo-dumpers.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T18:02:17+00:00",
    },
    {
      author: "Sahil Sood",
      title:
        "Jake Paul Losing ‘Millions of Dollars’ Prompts UFC Legend to Ask Hard Hitting Questions",
      description:
        "YouTube sensation Jake Paul recently overcame the biggest challenge of his young boxing career after beating Anderson Silva via unanimous decision. Although the fights Paul puts on are seen as more of a spectacle rather than an actual boxing match, this formula was working for him as his fight against Tyron Woodley did great numbers&#8230;The post Jake Paul Losing ‘Millions of Dollars’ Prompts UFC Legend to Ask Hard Hitting Questions appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/boxing-ufc-mma-news-jake-paul-losing-millions-of-dollars-prompts-ufc-legend-to-ask-hard-hitting-questions/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1238270816-473x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T18:15:14+00:00",
    },
    {
      author: "Rory Dollard",
      title:
        "England’s cricketers could be forced to review Pakistan security after Imran Khan shooting",
      description:
        "The former Pakistan cricketer and prime minster was shot in the leg during an incident in Wazirabad which saw one person killed.",
      url: "https://www.independent.co.uk/sport/cricket/england-pakistan-babar-azam-punjab-england-and-wales-cricket-board-b2217164.html",
      source: "The Independent - Sports",
      image:
        "https://static.independent.co.uk/2022/11/03/17/870b9c58113d72c7fc9f2ba31ab6c6f3Y29udGVudHNlYXJjaGFwaSwxNjY3NTgxMDc2-2.6476784.jpg?width=1200&auto=webp",
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T18:26:39+00:00",
    },
    {
      author: "Jackson Cole",
      title:
        "Gerard Pique will retire from football after Barcelona LaLiga match on Saturday in shock announcement",
      description:
        "Gerard Pique will retire from football after Barcelona LaLiga match on Saturday in shock announcement",
      url: "https://talksport.com/football/1236746/gerard-pique-retire-football-barcelona-laliga-match-saturday-in-shock-announcement/",
      source: "TalkSport",
      image: null,
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-03T18:34:36+00:00",
    },
    {
      author: "Nida Chakraborty",
      title:
        "Red Bull Maestro & Wife, Who Were Subjected to a “Year of Abuse”, Send Heartbreaking Message",
      description:
        "Reigning champions, Red Bull, have not been enjoying their time in glory as the F1 Budget Cost Cap issue takes precedence. Ever since the allegations arose, Red Bull has been under the watch of the FIA. Notably, post a thorough investigation, Red Bull was indeed found guilty. Not to mention, throughout the whole period, Red&#8230;The post Red Bull Maestro & Wife, Who Were Subjected to a “Year of Abuse”, Send Heartbreaking Message appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/f1-news-red-bull-maestro-wife-who-were-subjected-to-a-year-of-abuse-send-heartbreaking-message/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-790135009-471x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T19:13:37+00:00",
    },
    {
      author: "Mike McDaniel",
      title: "Ben Simmons to Miss at Least Two More Games With Knee Soreness",
      description:
        "The Nets star has dealt with lingering injuries in the early part of the season.",
      url: "https://www.si.com/nba/2022/11/03/ben-simmons-to-miss-at-least-two-more-games-with-knee-soreness",
      source: "Sports Illustrated",
      image:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_1200%2Cq_auto:good%2Cw_1200/MTkzMzI0NjUyMTIxMDQwODAz/ben-simmons-nets-grizzlies.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T19:28:37+00:00",
    },
    {
      author: "Rohit Kumawat",
      title:
        "“It’s Not for Money…”: Michael Jordan Once Admitted Wanting to Surpass the MLB and NFL Legends Who Inspired His Unusual Career Path",
      description:
        "Michael Jordan was one of the rarest athletic talents capable of achieving anything that attracted his interest. Jordan had an unbelievable career as an NBA athlete, winning six championships for the Chicago Bulls in the 1990s. However, MJ&#8217;s competitive ambition always pushed him to do greater things than he had already achieved. Jordan&#8217;s diverse mindset&#8230;The post “It’s Not for Money…”: Michael Jordan Once Admitted Wanting to Surpass the MLB and NFL Legends Who Inspired His Unusual Career Path appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nba-basketball-news-its-not-for-money-michael-jordan-once-admitted-wanting-to-surpass-the-mlb-and-nfl-legends-who-inspired-his-unusual-career-path/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-76348881-450x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T19:50:21+00:00",
    },
    {
      author: "Adam Gretz, Yardbarker",
      title: "Watch: Jaromir Jagr loved tribute from current Penguins player",
      description:
        "It is expected that when Jagr officially announces his retirement from hockey that his No. 68 will eventually get retired by the team.",
      url: "https://www.yardbarker.com/nhl/articles/watch_jaromir_jagr_loved_tribute_from_current_penguins_player/s1_13132_38075254",
      source: "Yardbarker",
      image:
        "http://www.yardbarker.com/media/e/d/ed04e8a62c1881ad21b9216e47eb7efb8546ad3b/thumb_16x9/jaromir-jagr-loved-tribute-current-penguins-player.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T19:51:29+00:00",
    },
    {
      author: "Rohit Kumawat",
      title:
        "“You’re Backing Down, You’re Being a Pus*y!”: Larry Bird Had to Overcome Brutal Spat Between Celtics Team to Beat Warriors in 1991",
      description:
        "The Boston Celtics are the most successful team in the NBA with 17 championships. The Celtics remained a dominant force in the league for three decades from the 1960s to the 1980s. However, the domination slowly started to fade away after the franchise&#8217;s 1986 championship win. The Celtics legend Larry Bird helped the team win&#8230;The post “You’re Backing Down, You’re Being a Pus*y!”: Larry Bird Had to Overcome Brutal Spat Between Celtics Team to Beat Warriors in 1991 appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nba-basketball-news-youre-backing-down-youre-being-a-pusy-larry-bird-had-to-overcome-brutal-spat-between-celtics-team-to-beat-warriors-in-1991/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/20210118211722/GettyImages-81695234-479x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T21:30:35+00:00",
    },
    {
      author: "Kevin Skiver",
      title:
        "A.J. Brown college: Inside the stacked 2018 Ole Miss roster featuring DK Metcalf, Elijah Moore",
      description: "2018 Ole Miss had the makings of a juggernaut.",
      url: "https://www.sportingnews.com/us/ncaa-football/news/aj-brown-college-2018-ole-miss-roster-dk-metcalf-elijah-moore/kjeg8469ito2uehbb2vy0iob",
      source: "Sporting News",
      image:
        "https://library.sportingnews.com/2022-11/nba-canada--2b725d3c-57db-45ae-b51e-0581fa23b951.png",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T22:54:19+00:00",
    },
    {
      author: "Sam Jarden",
      title:
        "Eagles vs. Texans live score, updates, highlights from NFL 'Thursday Night Football' game",
      description:
        'Sporting News is tracking live scoring updates and highlights from Philadelphia vs. Houston on "Thursday Night Football."',
      url: "https://www.sportingnews.com/us/nfl/news/eagles-texans-live-score-highlights-thursday-night-football/tatuysylxrb78cbgv1ult5oc",
      source: "Sporting News",
      image:
        "https://library.sportingnews.com/2022-11/sporting-news-2022-sn-live-c269fb22-f20e-43d5-855d-ef7d2803a4b7.png",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T23:33:02+00:00",
    },
    {
      author: "Anika Gomez",
      title:
        "Undefeated Philadelphia Eagles Suffer Injury Blow That Could Have Major Implications to Perfect Record",
      description:
        "Philadelphia Eagles defensive tackle Jordan Davis has been placed on injured reserve because of a high ankle sprain. The rookie was injured during the Eagles vs Steelers game that they won 35-13. The Eagles picked Davis in the first round of the 2022 draft. Davis&#8217; placement on the injured reserve indicates that the defensive tackle&#8230;The post Undefeated Philadelphia Eagles Suffer Injury Blow That Could Have Major Implications to Perfect Record appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nfl-news-undefeated-philadelphia-eagles-suffer-injury-blow-that-could-have-major-implications-to-perfect-record/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/20210104185215/2021-01-04T031021Z_576829667_MT1USATODAY15393680_RTRMADP_3_NFL-WASHINGTON-FOOTBALL-TEAM-AT-PHILADELPHIA-EAGLES-473x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T23:30:22+00:00",
    },
    {
      author: "Shashank Wankhede",
      title:
        "Mike Tyson & Podcast Guest Weigh-In on ‘Hypocrisy of Cancel’ Culture",
      description:
        "Legendary boxer Mike Tyson currently hosts his own podcast named &#8216;Hotboxin’ with Mike Tyson&#8217;, where he talks about many global issues. His recent episode featured American comedian and actor Annette ‘Leslie’ Jones. The two went on to discuss the cancel culture which has been making a buzz online these days.  Leslie Jones is an experienced&#8230;The post Mike Tyson & Podcast Guest Weigh-In on ‘Hypocrisy of Cancel’ Culture appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/boxing-news-mike-tyson-podcast-guest-weigh-in-on-hypocrisy-of-cancel-culture/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1205530672-473x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T23:45:10+00:00",
    },
    {
      author: "Zac Wassink, Yardbarker",
      title:
        "Yankees' Aaron Boone didn't worry about job security after ALCS sweep",
      description:
        "Boone signed a three-year contract that includes a club option for 2025 in October 2021.",
      url: "https://www.yardbarker.com/mlb/articles/yankees_aaron_boone_didnt_worry_about_job_security_after_alcs_sweep/s1_13132_38076246",
      source: "Yardbarker",
      image:
        "http://www.yardbarker.com/media/b/0/b005108e27db4e05f162475d7d245335deafdceb/thumb_16x9/aaron-boone-worry-job-security-sweep.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-03T23:46:57+00:00",
    },
    {
      author: "Pranchal Srivastava",
      title:
        "IND vs ZIM Dream11 Prediction: India vs Zimbabwe starts at 1:30 PM, Check Top Fantasy Picks, Playing XI, Pitch Report, & IND vs ZIM Live Streaming Details: Follow ICC T20 World Cup",
      description:
        "IND vs ZIM Dream11 Prediction: ICC T20 World Cup 2022 Live: Match on Sunday 1:30 PM – Team India will take on Zimbabwe&#8230;The post IND vs ZIM Dream11 Prediction: India vs Zimbabwe starts at 1:30 PM, Check Top Fantasy Picks, Playing XI, Pitch Report, & IND vs ZIM Live Streaming Details: Follow ICC T20 World Cup first appeared on Inside Sport India.",
      url: "https://www.insidesport.in/ind-vs-zim-dream11-prediction-india-vs-zimbabwe-starts-at-130-pm-check-top-fantasy-picks-playing-xi-pitch-report-ind-vs-zim-live-streaming-details-follow-icc-t20-world-cup/",
      source: "Insidesport",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-04T00:01:42+00:00",
    },
    {
      author: "Alicia de Artola",
      title:
        "Steve Kerr speaks out about Kyrie Irving’s anti-semitic social media post",
      description:
        "Warriors head coach Steve Kerr spoke out about Kyrie Irving&#8217;s social media post promoting an anti-semitic film by highlighting the impact of words. Steve Kerr usually isn&#8217;t shy about commenting on societal issues, even ones not directly connected to the NBA. This week, he had the chance to weigh in on an issue that has [&#8230;]Steve Kerr speaks out about Kyrie Irving&#8217;s anti-semitic social media post - FanSided - FanSided - Sports News, Entertainment, Lifestyle & Technology - 300+ Sites",
      url: "https://fansided.com/2022/11/03/steve-kerr-kyrie-irving-social-media/",
      source: "Fansided",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-04T00:58:45+00:00",
    },
    {
      author: "Andrew Kulha, Yardbarker",
      title:
        "Astros' World Series no-hitter drew biggest Game 4 audience since 2018",
      description: "Wednesday's Game 4 was a boon for Fox.",
      url: "https://www.yardbarker.com/mlb/articles/astros_world_series_no_hitter_drew_biggest_game_4_audience_since_2018/s1_13132_38076478",
      source: "Yardbarker",
      image:
        "http://www.yardbarker.com/media/1/0/104c6a8cce17cd1533e655a033a460d21481983f/thumb_16x9/astros-world-series-drew-biggest-game-4-audience.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-04T01:26:04+00:00",
    },
    {
      author: "Yash Sawant",
      title:
        "WWE Crown Jewel 2022: 3 Possible Endings for Bianca Belair vs Bayley ",
      description:
        "WWE Crown Jewel 2022: 3 Possible Endings for Bianca Belair vs Bayley: The &#8216;EST of WWE&#8217; Bianca Belair will defend her Raw&#8230;The post WWE Crown Jewel 2022: 3 Possible Endings for Bianca Belair vs Bayley  first appeared on Inside Sport India.",
      url: "https://www.insidesport.in/wwe-crown-jewel-2022-3-possible-endings-for-bianca-belair-vs-bayley/",
      source: "Insidesport",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-04T02:09:29+00:00",
    },
    {
      author: "Peter Ryan",
      title:
        "Brendon Goddard rejoins the fold as St Kilda goes back to the future",
      description:
        "Brendon Goddard is the latest former Saints gun to return to Moorabbin to work under Ross Lyon in his second stint at St Kilda coach.",
      url: "https://www.smh.com.au/sport/afl/brendon-goddard-rejoins-the-fold-as-st-kilda-goes-back-to-the-future-20221104-p5bvn2.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$zoom_0.3843%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_151%2C$y_0/t_crop_custom/q_86%2Cf_jpg/09f65620c8d3b1f99b14d02e518a5cc3c0707441",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-04T02:45:51+00:00",
    },
    {
      author: "Peter Ryan",
      title:
        "Brendon Goddard rejoins the fold as St Kilda goes back to the future",
      description:
        "Brendon Goddard is the latest former Saints gun to return to Moorabbin to work under Ross Lyon in his second stint at St Kilda coach.",
      url: "https://www.theage.com.au/sport/afl/brendon-goddard-rejoins-the-fold-as-st-kilda-goes-back-to-the-future-20221104-p5bvn2.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.3843%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_151%2C$y_0/t_crop_custom/q_86%2Cf_jpg/09f65620c8d3b1f99b14d02e518a5cc3c0707441",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-04T02:45:51+00:00",
    },
    {
      author: "wwos",
      title: "Sparks fly between NRL star, 'Tyson' wanna-be",
      description:
        "ULTIMATE GUDE: A brawl threatened to erupt during Friday&#x27;s pre-fight weigh-in for the SBW vs Mark Hunt boxing night.",
      url: "https://wwos.nine.com.au/combat-sports/sonny-bill-williams-mark-hunt-boxing-fight-2022-latest-news-undercard-date-time-how-to-watch-odds-everything-to-know-ultimate-guide/82b31067-4692-4ec1-a63e-f6c774ce5214",
      source: "Wide World Of Sports",
      image:
        "https://vms-network-images-prod.s3-ap-southeast-2.amazonaws.com/2022/11/464424/pickerimage.jpg",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-04T03:25:21+00:00",
    },
    {
      author: "Nida Chakraborty",
      title:
        "Lewis Hamilton Demands His Father Gets Added to Elite List of Legends As F1 World Welcomes “Daddy Cool”",
      description:
        "Mercedes&#8217; seven-time world champion Lewis Hamilton has always been a head-turner when it comes to fashion. Many a time, Lewis has shown up in flashy, trendy jackets that caught the attention of many around the globe. When it comes to fashion, the Briton never goes wrong. The Mercedes star has always talked about the relationships&#8230;The post Lewis Hamilton Demands His Father Gets Added to Elite List of Legends As F1 World Welcomes “Daddy Cool” appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/f1-news-lewis-hamilton-demands-his-father-get-added-to-elite-list-of-legends-as-f1-world-welcomes-daddy-cool/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/2022-10-29T211512Z_727498905_UP1EIAT1N1958_RTRMADP_3_MOTOR-F1-MEXICO-1-470x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-04T06:38:31+00:00",
    },
    {
      author: "Stephanie Apstein",
      title:
        "Trey Mancini Saves the Astros With His Glove as His Bat Fails Him",
      description:
        "He was traded to Houston to add some thump to the lineup. Instead, his signature moment came on defense.",
      url: "https://www.si.com/mlb/2022/11/04/trey-mancini-world-series",
      source: "Sports Illustrated",
      image:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_1200%2Cq_auto:good%2Cw_1200/MTkzNTAzOTYwMDI2MzI2NDY3/mancini-bregman.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-04T07:31:51+00:00",
    },
    {
      author: "Jackson Cole",
      title:
        "Arsenal avoid Ajax, Barcelona and Juventus in Europa League play-off round as Kieran Tierney goal sees Gunners finish top of group",
      description:
        "Arsenal avoid Ajax, Barcelona and Juventus in Europa League play-off round as Kieran Tierney goal sees Gunners finish top of group",
      url: "https://talksport.com/football/1236878/arsenal-result-juventus-barcelona-kieran-tierney-goal/",
      source: "TalkSport",
      image: null,
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T07:52:00+00:00",
    },
    {
      author: "Aditya Srivastava",
      title:
        "“We’ll Come Out Fighting”: Christian Horner Not Ready to Throw in the Towel as He Fires a Subtle Warning to Lewis Hamilton and Co.",
      description:
        "Red Bull is the champion of 2022. Yes, for us it&#8217;s just a statement, but for team Red Bull, it&#8217;s years of hard work and determination. All thanks to their team boss, Christian Horner, who molded his team around aggression and passion. Recently, in an interview after Mexican Grand Prix, Horner talked about the team&#8217;s&#8230;The post “We’ll Come Out Fighting”: Christian Horner Not Ready to Throw in the Towel as He Fires a Subtle Warning to Lewis Hamilton and Co. appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/f1-news-well-come-out-fighting-christian-horner-not-ready-to-throw-in-the-towel-as-he-fires-a-subtle-warning-to-lewis-hamilton-and-co/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-606177524-473x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-04T08:15:40+00:00",
    },
    {
      author: "",
      title: "Green out cheaply on World Cup debut",
      description:
        "Australia's World Cup debutant Cameron Green was caught out for three after being called into the team.",
      url: "https://www.theage.com.au/sport/cricket/green-out-cheaply-on-world-cup-debut-20221104-p5bvrk.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/aa8dfa63a5bb2a6653db72d97c9bb8a6036c8475",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-04T08:27:36+00:00",
    },
    {
      author: "Vince Rugari",
      title:
        "‘Disrespectful and deeply offensive’: Sydney United 58 hit with heavy fine, suspended sanctions",
      description:
        "Fined $15,000 by Football Australia, Sydney United 58 could also be stripped of points and banned from future editions of the Australian Cup if the Croatian-backed club or their fans breach the federation’s requirements.",
      url: "https://www.smh.com.au/sport/soccer/disrespectful-and-deeply-offensive-sydney-united-58-hit-with-heavy-fine-suspended-sanctions-20221104-p5bvmt.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$zoom_0.26109467455621305%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_110/t_crop_custom/q_86%2Cf_jpg/2da133e83d94a585c2a1a01b1d20e87d6b559388",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-04T08:47:00+00:00",
    },
    {
      author: "Christian Nicolussi",
      title: "Ellsberg continuing a purple patch for older stallions",
      description:
        "In the same week that six-year-old stallion Gold Trip won the Melbourne Cup, five-year-old entire Ellsberg is the raging favourite for Sydney’s final spring major.",
      url: "https://www.smh.com.au/sport/nrl/ellsberg-continuing-a-purple-patch-for-older-stallions-20221104-p5bvmz.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$zoom_0.1977%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_109/t_crop_custom/q_86%2Cf_jpg/2b262a8756394e5c5a4b2f9e603285a281a66c7e",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-11-04T08:47:00+00:00",
    },
    {
      author: "Nidheesh Kumar",
      title:
        "“I Can’t Do S**t in This League..”: Almost 100,000 Yards Old Tom Brady Talks About How He Achieved Such Mammoth Longevity in a Sport Like Football",
      description:
        "Tom Brady is on the verge of creating a historical record. TB12 is just 164 yards away from reaching 100,000 passing yards in his career. It would make him the first player in league history to achieve six figures in passing yards. The legend is about to create this dubious distinction in his 23rd year&#8230;The post “I Can’t Do S**t in This League..”: Almost 100,000 Yards Old Tom Brady Talks About How He Achieved Such Mammoth Longevity in a Sport Like Football appeared first on EssentiallySports.",
      url: "https://www.essentiallysports.com/nfl-news-i-cant-do-st-in-this-league-almost-100000-yards-old-tom-brady-talks-about-how-he-achieved-such-mammoth-longevity-in-a-sport-like-football/",
      source: "Essentially Sports",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/2022-09-26T002618Z_999862901_MT1USATODAY19118641_RTRMADP_3_NFL-GREEN-BAY-PACKERS-AT-TAMPA-BAY-BUCCANEERS-1-420x315.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-04T09:14:23+00:00",
    },
    {
      author: "Jack Johnson",
      title:
        "Why does Cristiano Ronaldo stand sideways during Portugal’s national anthem? Man United legend makes patriotic gesture",
      description:
        "Why does Cristiano Ronaldo stand sideways during Portugal’s national anthem? Man United legend makes patriotic gesture",
      url: "https://talksport.com/football/1236509/why-cristiano-ronaldo-stand-sideways-during-portugal-national-anthem-world-cup/",
      source: "TalkSport",
      image: null,
      category: "sports",
      language: "en",
      country: "gb",
      published_at: "2022-11-04T09:23:45+00:00",
    },
    {
      author: "Sportelo",
      title:
        "(VIDEO) Watch : Kieran Tierney rocket goal for Arsenal against FC Zurich in the Europa League",
      description:
        "(VIDEO) Watch : Kieran Tierney rocket goal for Arsenal against FC Zurich in the Europa League This is a lovely finish. Ben White overlaps to cross, Fabio Vieira sees a shot blocked but the ball falls to Kieran Tierney. He catches his shot perfectly. Bang into the bottom corner.  The what a rocket The Gunners [&#8230;]",
      url: "https://www.sportelo.com.ng/video-watch-kieran-tierney-rocket-goal-for-arsenal-against-fc-zurich-in-the-europa-league/",
      source: "Sportelo",
      image: null,
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-11-04T09:34:02+00:00",
    },
  ],
};

export const technology = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 100,
    total: 5476,
  },
  data: [
    {
      author: "Christine Hall",
      title:
        "Daily Crunch: AI content developer Jasper now valued at $1.5B following capital infusion",
      description:
        "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.Daily Crunch: AI content developer Jasper now valued at $1.5B following capital infusion by Christine Hall originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/18/daily-crunch-ai-content-developer-jasper-now-valued-at-1-7b-following-capital-infusion/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T00:30:00+00:00",
    },
    {
      author: "Manish Singh",
      title: "Kakao co-CEO resigns after fire incident that caused mass outage",
      description:
        "Whon Namkoong, the co-chief executive of Kakao, has resigned from his position after a fire incident at a data center last week caused a mass outage at the South Korea&#8217;s top instant messaging app KakaoTalk. Namkoong, who joined Kakao in 2015, was elevated to the co-CEO role this March. At a press conference Tuesday, he [&#8230;]Kakao co-CEO resigns after fire incident that caused mass outage by Manish Singh originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/18/kakao-co-ceo-resigns-after-fire-incident-that-caused-mass-outage/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T03:04:27+00:00",
    },
    {
      author: "Darrell Etherington",
      title:
        "Watch Serena Williams talk about the biggest investment she missed out on and more",
      description:
        "Serena Williams was our guest at TechCrunch Disrupt 2022, and joined TC Deputy Editor-in-Chief Jordan Crook to talk about Serena Ventures, the investment firm she founded with Alison Rapaport Stillman. She talked to us at length about her approach to startup investing, including how much her investor persona differs from her tennis persona, and also [&#8230;]Watch Serena Williams talk about the biggest investment she missed out on and more by Darrell Etherington originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/19/watch-serena-williams-talk-about-the-biggest-investment-she-missed-out-on-and-more/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T22:24:53+00:00",
    },
    {
      author: "Charles Pulliam-Moore",
      title:
        "M3gan’s serving Small Wonder with a side of murder in its first trailer",
      description:
        "M3gan the doll sitting among her fellow playthings. | Universal Pictures The poster alone for Universal’s upcoming horror M3gan, from director Gerard Johnstone, was enough to make it seem like the feature might be worthy of a spot in the great killer doll canon. But watching the movie’s trailer, it’s clear that M3gan’s going for a very of-the-moment kind of madness that owes just as much to Tesla’s totally real and almost functional robots as it does the Child’s Play franchise and classics like Small Wonder.Written by Akela Cooper and co-producer James Wan, M3gan tells the tale of...",
      url: "https://www.theverge.com/2022/10/11/23398853/m3gan-trailer-universal",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T23:37:11+00:00",
    },
    {
      author: "Colin Kruger and Nick Bonyhady",
      title: "What we know about Medibank hack, and what should customers do?",
      description:
        "The Medibank hackers appear to have taken more sensitive information than the criminals who targeted Optus received.",
      url: "https://www.theage.com.au/technology/what-we-know-about-medibank-hack-and-what-should-customers-do-20221020-p5brgi.html?ref=rss&utm_medium=rss&utm_source=rss_technology",
      source: "The Age",
      image:
        "https://static.ffx.io/images/$zoom_0.2043%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_108/t_crop_custom/q_86%2Cf_jpg/6db332d2ba707127ccc86d0d7a345f166ca89f28",
      category: "technology",
      language: "en",
      country: "au",
      published_at: "2022-10-20T07:58:39+00:00",
    },
    {
      author: null,
      title: "Demodesk is hiring a full-stack product engineer",
      description: "Comments",
      url: "https://demodesk.com/careers",
      source: "Hacker News",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T08:31:04+00:00",
    },
    {
      author: null,
      title:
        "Release (YC W20) Is Hiring – Senior Cloud Infrastructure Engineer",
      description: "Comments",
      url: "https://www.ycombinator.com/companies/release/jobs/DQlAy09AD-senior-software-engineer-cloud-infrastructure",
      source: "Hacker News",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T21:00:36+00:00",
    },
    {
      author: "Mitchell Clark",
      title:
        "Bethesda’s letting people rescue their Elder Scrolls Online games from Stadia",
      description:
        "Image: Bethesda If you played The Elder Scrolls Online using Google’s now-doomed Stadia cloud gaming service, I have some good news. Bethesda is making good on its promise to let people port their ESO accounts over to Windows and Mac, including all their progress, characters, purchased content, achievements, and inventory items. According to several members of the Stadia subreddit, the company has been sending out emails to players with instructions on how to get the game up and running on their computers, which basically just involves logging into the Elder Scrolls Online site and...",
      url: "https://www.theverge.com/2022/10/20/23415558/bethesda-elder-scrolls-online-stadia-save-progress-transfer-pc",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-21T01:35:00+00:00",
    },
    {
      author: "Ram Iyer",
      title: "3 ways to hire well for your startup",
      description:
        "Just as a customer pilots the product, companies should pilot their most important hires whenever possible.3 ways to hire well for your startup by Ram Iyer originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/21/3-tips-for-hiring-well-for-your-startup/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-21T17:05:52+00:00",
    },
    {
      author: "Walter Thompson",
      title:
        "TechCrunch+ roundup: PLG and enterprise sales, SaaS pricing strategy, OPT options",
      description:
        "After staging our first TechCrunch Disrupt in San Francisco in three years, Slack is much quieter than usual this morning.TechCrunch+ roundup: PLG and enterprise sales, SaaS pricing strategy, OPT options by Walter Thompson originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/21/techcrunch-roundup-plg-and-enterprise-sales-saas-pricing-strategy-opt-options/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-21T17:05:51+00:00",
    },
    {
      author: "Christine Hall",
      title:
        "Daily Crunch: Amazon says OEMs won’t build their smart TVs due to ‘concern that Google would retaliate’",
      description:
        "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.Daily Crunch: Amazon says OEMs won&#8217;t build their smart TVs due to &#8216;concern that Google would retaliate&#8217; by Christine Hall originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/21/daily-crunch-amazon-says-oems-wont-build-their-smart-tvs-due-to-concern-that-google-would-retaliate/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-21T22:05:43+00:00",
    },
    {
      author: "Kyle Wiggers",
      title:
        "Makersite lands $18M to help companies manage product supply chains",
      description:
        "In 2018, Neil D’Souza, a software engineer by trade and previously the VP of product development at Thinkstep, came to the realization that his ten-plus-year effort to solve enterprise product challenges in the areas of sustainability, compliance and risk were having little impact. The way he saw it, they took too long, which minimized their [&#8230;]Makersite lands $18M to help companies manage product supply chains by Kyle Wiggers originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/18/makersite-lands-18m-to-help-companies-manage-product-supply-chains/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T06:00:45+00:00",
    },
    {
      author: "Jaclyn Trop",
      title: "BMW to invest $1.7B to build EVs in South Carolina",
      description:
        "BMW plans to invest $1.7 billion to build at least six EV models in the U.S. by the end of the decade. The investment announced Wednesday includes $1 billion toward BMW’s factory in Spartanburg, South Carolina and $700 million to fund a new battery cell plant nearby. The factory, which builds BMW’s portfolio of X [&#8230;]BMW to invest $1.7B to build EVs in South Carolina by Jaclyn Trop originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/19/bmw-to-invest-1-7b-to-build-evs-in-south-carolina/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T15:54:01+00:00",
    },
    {
      author: null,
      title: "Substack is hiring Data Analysts to build the future for writing",
      description: "Comments",
      url: "https://boards.greenhouse.io/substack/jobs/4006118005?gh_src=hn",
      source: "Hacker News",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T17:15:44+00:00",
    },
    {
      author: "Harri Weber",
      title:
        "Advanced Ionics teases electrolysis innovation ‘to clean up’ the filthy hydrogen business",
      description:
        "Advanced Ionics, a climate-tech startup that hails from Milwaukee, Wisconsin, is striving to drive down the price of green hydrogen by slashing how much electricity is needed for electrolysis by as much as 50%. That&#8217;s an admirable goal, because despite all the talk of hydrogen as a &#8220;fuel of the future,&#8221; the industry is still [&#8230;]Advanced Ionics teases electrolysis innovation &#8216;to clean up&#8217; the filthy hydrogen business by Harri Weber originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/19/advanced-ionics-teases-electrolysis-innovation-to-clean-up-the-filthy-hydrogen-business/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T22:36:01+00:00",
    },
    {
      author: "Aisha Malik",
      title:
        "Date night? Relationship app Sparks wants to help you plan a lovely evening",
      description:
        "There&#8217;s an abundance of dating apps on the market, but there aren&#8217;t many apps that aim to keep the spark alive after you enter a relationship. Enter Sparks, an app catering to existing couples looking to introduce new and fun experiences to their lives. The Barcelona-based startup, which exhibited as part of the Battlefield 200 [&#8230;]Date night? Relationship app Sparks wants to help you plan a lovely evening by Aisha Malik originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/19/relationship-app-sparks-wants-make-date-nights-easier-plan/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T00:02:15+00:00",
    },
    {
      author: "Catherine Shu",
      title:
        "Skuad manages hiring and compliance for building distributed teams",
      description:
        "Singapore-based Skuad helps companies hire employees in different countries while staying compliant with local employment regulations and processing cross-border payroll. The startup announced today it has raised $15 million in Series A funding. Skuad has signed up more than 350 employers so far, mostly from North America, Europe and Southeast Asia. This funding round, which [&#8230;]Skuad manages hiring and compliance for building distributed teams by Catherine Shu originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/19/skuad-manages-hiring-and-compliance-for-building-distributed-teams/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T01:00:37+00:00",
    },
    {
      author: "",
      title: "Four million Australians could be exposed in Medibank hack",
      description:
        "Four million Australains could have their private data in the hands of hackers who stole it from Medibank.",
      url: "https://www.smh.com.au/technology/four-million-australians-could-be-exposed-in-medibank-hack-20221021-p5brmx.html?ref=rss&utm_medium=rss&utm_source=rss_technology",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/b790dd79b66305d7476c7df030d2d353a52c6d8d",
      category: "technology",
      language: "en",
      country: "au",
      published_at: "2022-10-20T19:00:15+00:00",
    },
    {
      author: "Frederic Lardinois",
      title:
        "Zapier extends its automation service with first-party database and UI tools",
      description:
        "For the longest time, Zapier, which launched in 2011, was content with helping its users automate simple workflows and build integrations between various business-critical tools. That&#8217;s been a great business for the company, but users today expect a bit more, and over the course of the last couple of years, the company decided it was [&#8230;]Zapier extends its automation service with first-party database and UI tools by Frederic Lardinois originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/20/zapier-extends-its-automation-service-with-first-party-database-and-ui-tools/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T20:00:50+00:00",
    },
    {
      author: "Catherine Shu",
      title:
        "Handoff is creating a more equitable workforce through job sharing",
      description:
        "Many qualified workers are failed by the current model of work in the United States, where jobs are either part-time or full-time. Working 40 set hours a week is difficult for people like caregivers, but part-time jobs don’t have the same benefits or career-advancing potential. Handoff, one of the startups in TechCrunch Disrupt Battlefield 200, [&#8230;]Handoff is creating a more equitable workforce through job sharing by Catherine Shu originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/20/handoff-is-creating-a-more-equitable-workforce-through-job-sharing/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T20:19:13+00:00",
    },
    {
      author: "Kirsten Korosec",
      title:
        "EV maker Arrival cutting jobs again in pivot away from UK to the US",
      description:
        "Commercial EV company Arrival is restructuring its business for the second time in six months as it tries to squeeze the most out of its remaining capital. The company said in a regulatory filing posted Thursday that it is shifting its focus towards the to the United States and away from the UK market, where [&#8230;]EV maker Arrival cutting jobs again in pivot away from UK to the US by Kirsten Korosec originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/20/ev-maker-arrival-cutting-jobs-again-in-pivot-away-from-uk-to-the-us/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T22:33:16+00:00",
    },
    {
      author: "Romain Dillet",
      title:
        "Meta’s $10B metaverse investment is ‘not enough’ according to Animoca Brands’ Yat Siu",
      description:
        "Yat Siu, the co-founder and executive chairman of Animoca Brands, has a lot of thoughts about the metaverse. That’s because his company owns The Sandbox and has investments in many different web3 companies, such as OpenSea, Dapper Labs and Axie Infinity. At TechCrunch Disrupt, he shared his thoughts about Meta’s take on the metaverse. “They [&#8230;]Meta’s $10B metaverse investment is ‘not enough’ according to Animoca Brands’ Yat Siu by Romain Dillet originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/20/metas-10b-metaverse-investment-is-not-enough-according-to-animoca-brands-yat-siu/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T23:49:34+00:00",
    },
    {
      author: "Christine Hall",
      title:
        "Suma Wealth helps Latinos build credit through gaming, in-culture content",
      description:
        "Suma Wealth offers in-culture financial content, products and experiences so they can gain control of their economic power and build wealth.Suma Wealth helps Latinos build credit through gaming, in-culture content by Christine Hall originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/21/suma-wealth-latinos-credit-gaming/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-21T13:02:21+00:00",
    },
    {
      author: "Lauren Forristal",
      title:
        "Disney launches web3 experience to celebrate 100 years of Disney music",
      description:
        "Disney collaborated with Accelerator participant, Obsess, an e-commerce platform known for creating interactive virtual storefronts, to release a new web3 experience for its Disney Music Emporium online store. The 3D 360 virtual experience lets fans discover soundtracks and songs from popular Disney films and TV shows by clicking on various vinyl records and CDs throughout [&#8230;]Disney launches web3 experience to celebrate 100 years of Disney music by Lauren Forristal originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/21/disney-launches-web3-experience-to-celebrate-100-years-of-disney-music/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-21T14:00:25+00:00",
    },
    {
      author: "Rita Liao",
      title:
        "Taylor Swift’s ‘Midnights’ is the priciest digital album Tencent has sold",
      description:
        "Taylor Swift&#8217;s latest album &#8220;Midnights&#8221; has dropped, and it might be setting a new standard for China&#8217;s digital music industry. Within a day of its release, the 13-track album, priced at 35 yuan or $4.83, has racked up nearly 200,000 copies on Tencent&#8217;s QQ, one of the largest music streaming platforms in China. While $4.83 [&#8230;]Taylor Swift&#8217;s &#8216;Midnights&#8217; is the priciest digital album Tencent has sold by Rita Liao originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/21/taylor-swifts-midnights-is-the-priciest-digital-album-tencent-has-sold/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-21T22:35:27+00:00",
    },
    {
      author: "Tage Kene-Okafor",
      title:
        "MaxAB, an Egyptian B2B e-commerce platform for food and grocery supplies, nabs $40M",
      description:
        "Last year, MaxAB, the food and grocery B2B e-commerce and distribution platform serving a network of traditional retailers across Egypt and Morocco, raised its $55 million Series A in two tranches; the latter accompanied its acquisition of the Morocco-based and YC-backed WaysToCap. The moves signaled MaxAB’s ambition to dominate Egypt’s and North Africa’s B2B retail [&#8230;]MaxAB, an Egyptian B2B e-commerce platform for food and grocery supplies, nabs $40M by Tage Kene-Okafor originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/19/maxab-an-egyptian-b2b-e-commerce-platform-for-food-and-grocery-supplies-nabs-40m/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T09:07:27+00:00",
    },
    {
      author: "Ash Parrish",
      title: "Marvel Snap is 5D chess in six minutes or less",
      description:
        "Image: Second Dinner I love Marvel Snap for one very specific reason: the games are short. I’m a lover of collectible card games — Magic: The Gathering, specifically. But I know when I sit down to play a game, I have to be prepared to give up a significant portion of my time. As a result, it’s rare that I commit myself to a random game of Magic: The Gathering Arena because of the time involved. (Which is why I remain a below-mediocre player whenever I participate in my monthly casual MTG league.) But with Marvel Snap, one of the game’s biggest selling points is that a match can be...",
      url: "https://www.theverge.com/2022/10/19/23413064/marvel-snap-second-dinner-hearthstone-ios-android",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T19:31:38+00:00",
    },
    {
      author: "Devin Coldewey",
      title:
        "Kayhan Space is making orbit safer with timely, automatic collision warnings for satellites",
      description:
        "The orbital economy is heating up, but the infrastructure that supports it is starting to creak. Kayhan Space is a startup that makes sure your satellite doesn&#8217;t crash into another — or a launch or piece of space trash, for that matter — using modern data crunching techniques and a web-accessible platform. Kayhan presented today [&#8230;]Kayhan Space is making orbit safer with timely, automatic collision warnings for satellites by Devin Coldewey originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/19/kayhan-space-is-making-orbit-safer-with-timely-automatic-collision-warnings-for-satellites/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T22:47:53+00:00",
    },
    {
      author: "Brian Heater",
      title: "Watch Draymond Green discuss investing, media and mental health",
      description:
        "The final day of Disrupt kicked off in style with a conversation featuring four-time NBA All Star, Draymond Green. It was a spirited chat, covering the power forward&#8217;s push into media, including his podcast, The Draymond Green Show and deals with channels like TNT. Green also spoke at length about investing, managing mental health as [&#8230;]Watch Draymond Green discuss investing, media and mental health by Brian Heater originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/20/watch-draymond-green-discuss-investing-media-and-mental-health/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T20:45:39+00:00",
    },
    {
      author: null,
      title: "Supabase (YC S20) Is Hiring a Lead API and Billing Engineer",
      description: "Comments",
      url: "https://www.ycombinator.com/companies/supabase/jobs/xZkzLUJ-lead-billing-and-api-engineer",
      source: "Hacker News",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-21T07:07:44+00:00",
    },
    {
      author: "Taylor Hatmaker",
      title:
        "Activision Blizzard’s Johanna Faries highlights the company’s emerging ‘anti-tox’ strategy",
      description:
        "At TechCrunch Disrupt today, Activision Blizzard General Manager Johanna Faries elaborated on the company&#8217;s plans to clean up some of the worst behavior in the franchise&#8217;s community, even as new lawsuits and allegations about its own culture continue to emerge. Last month, Activision Blizzard released a formal code of conduct for the Call of Duty [&#8230;]Activision Blizzard’s Johanna Faries highlights the company’s emerging ‘anti-tox’ strategy by Taylor Hatmaker originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/18/activision-blizzards-johanna-faries-highlights-the-companys-emerging-anti-tox-strategy/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T01:13:40+00:00",
    },
    {
      author: "Jess Weatherbed",
      title:
        "Adobe’s latest AI prototype gives even the worst dancers some impressive moves",
      description:
        "AI tech like Adobe’s Project Motion Mix could make your still images replicate viral dance moves. | Image: Adobe Adobe will reveal a prototype AI project later today at Adobe Max 2022 that can convert a still image of a person into an animated dancer. Adobe says that all you need to do is load a full-body picture into Project Motion Mix, and the system will turn that individual into an AI-controlled puppet, animating new dance moves. The system uses a combination of AI-based motion generation and what Adobe is calling “human rendering technologies” to create its animations. The software...",
      url: "https://www.theverge.com/2022/10/19/23412526/adobe-dancing-ai-prototype-project-motion-mix-max-2022",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T13:58:43+00:00",
    },
    {
      author: "Lauren Simonds",
      title: "Here’s what’s happening on day two of Disrupt",
      description:
        "Day one of TechCrunch Disrupt is in the rearview mirror, and what a great day it was! We hope you’re well rested and well fed, because day two — October 19 — comes fully loaded with action, connection and opportunity. Latecomers still welcome: Buy a pass right here. All righty, let’s take a quick look [&#8230;]Here’s what’s happening on day two of Disrupt by Lauren Simonds originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/19/heres-whats-happening-on-day-two-of-disrupt/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T15:15:36+00:00",
    },
    {
      author: "Kyle Wiggers",
      title: "Incooling is building servers that use liquid to cool down",
      description:
        "The way Incooling CEO Helena Samodurova sees it, the IT world is experiencing two major crises: an energy crisis and a supply chain crisis. For IT teams, satisfying new climate-friendly energy budgets is presenting a challenge, particularly when dealing with older computer hardware. At the same time, acquiring improved, less power-sucking machines is becoming tougher [&#8230;]Incooling is building servers that use liquid to cool down by Kyle Wiggers originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/19/incooling-is-building-servers-that-use-liquid-to-cool-down/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-19T19:12:20+00:00",
    },
    {
      author: "Monica Chin",
      title: "How to share a calendar on Mac",
      description:
        "Illustration by Samar Haddad / The Verge Need to show a friend or relative what you’re up to next week and don’t have your phone handy? Try sharing your calendar from your MacBook with a few easy steps. Before you start, you’ll want to make sure iCloud is set up on your Mac and that the calendar you want to share is stored via iCloud (not just stored locally). To check if this is the case, you can go to Calendar &gt; Preferences &gt; Accounts.Once that’s all sorted, here’s how to share a calendar from your Mac. I have a lot of calendars called “Work.” Don’t @ me. How to share a...",
      url: "https://www.theverge.com/23414438/apple-mac-icloud-calendar-how-to",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T16:25:21+00:00",
    },
    {
      author: "Umar Shakir",
      title: "Arlo is now protecting residents when they leave their residence",
      description:
        "Arlo’s new Safe app has a “Walk with Me” hold button that will trigger an emergency response if no longer pressed, and the new Safe button accessory is a Bluetooth panic button. | Image: Arlo Arlo is launching a new family and personal mobile safety app and service that includes features like crash detection, a software panic hold switch for walking safely in unfamiliar places, and an optional Bluetooth alert button.Known for its wireless cameras, smart video doorbells, and, more recently, its DIY home security system, Arlo is expanding into the growing market of family tracking and...",
      url: "https://www.theverge.com/2022/10/20/23414379/arlo-safe-family-safety-app-service-crash-detection-location-alerts",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-20T17:16:04+00:00",
    },
    {
      author: "Caitlin Fitzsimmons",
      title: "Australian companies bungling how they communicate cyberattacks",
      description:
        "EnergyAustralia is the target of the latest data breach to hit corporate Australia.",
      url: "https://www.smh.com.au/technology/energyaustralia-struck-by-cyber-attack-attacking-weakness-in-password-rules-20221022-p5bryn.html?ref=rss&utm_medium=rss&utm_source=rss_technology",
      source: "The Sydney Morning Herald",
      image:
        "https://static.ffx.io/images/$zoom_0.3022260273972603%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_46/t_crop_custom/q_86%2Cf_jpg/1b8a694331c106eeaccf0cc9c05465bc32be11d7",
      category: "technology",
      language: "en",
      country: "au",
      published_at: "2022-10-22T05:02:07+00:00",
    },
    {
      author: "Kyle Wiggers",
      title: "Fermyon raises $20M to build tools for cloud app dev",
      description:
        "Matt Butcher and Radu Matei worked on container technologies for years, &#8220;containers&#8221; in this context referring to software packages containing all the necessary elements to run in any environment, from desktop PCs to servers. As engineers at Deis, and then DeisLabs once Microsoft acquired it in 2017, their team explored the container landscape and built [&#8230;]Fermyon raises $20M to build tools for cloud app dev by Kyle Wiggers originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/24/fermyon-cloud-app-webassembly-20m-funding-series-a/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-24T13:30:40+00:00",
    },
    {
      author: "Haje Jan Kamps",
      title:
        "Artiphon releases Orba 2, to make music-making even more accessible",
      description:
        "The original Orba was a curious little baseball-sized device that invited people who couldn&#8217;t play a triangle if they tried to somehow create beats, bops and bass lines. The success of the original &#8212; and the adoption of it as a tool for more serious musicians &#8212; inspired the Artiphon team to release an updated [&#8230;]Artiphon releases Orba 2, to make music-making even more accessible by Haje Jan Kamps originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/24/orba-2/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-24T16:37:01+00:00",
    },
    {
      author: "Steve Dent",
      title: "NASA names 16-person panel tasked with investigating UFOs",
      description:
        'Last June, NASA announced that it would convene a panel to study "unidentified aerial phenomena" (UAP), aka UFOs — while saying it doesn\'t believe they\'re "extraterrestrial in origin." Now, the space agency has unveiled the 16-member panel that will focus on "unclassified sightings and other data collected from civilian government and commercial sectors."Chairing the panel is David Spergel, former head of astrophysics at Prince University. Other members include Anamaria Berea, a research affiliate at the SETI (Search for Intelligence Life) Institute in Mountainview, California; retired NASA...',
      url: "https://www.engadget.com/nasa-16-person-panel-investigating-ufos-084041440.html?src=rss",
      source: "Engadget",
      image:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-10/3f22b600-5436-11ed-9bef-f6239dcf465a",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-25T08:40:41+00:00",
    },
    {
      author: "Geek's Guide to the Galaxy",
      title: "In 'Synchronic,' Time Travel Is Anything but Nostalgic",
      description:
        "Directors Justin Benson and Aaron Moorhead wanted to make a movie that didn't romanticize the past.",
      url: "https://www.wired.com/2020/10/geeks-guide-synchronic/",
      source: "Wired",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-22T19:25:25+00:00",
    },
    {
      author: "Mitchell Clark",
      title: "Henry Cavill is reassuring fans he’s still Superman",
      description:
        "(Henry Cavill’s) Superman returns. | Image: Henry Cavill on Instagram Henry Cavill is letting people know that he’s not done playing Superman (via The Hollywood Reporter). In an Instagram post on Monday, he posted a promotional image of himself as the superhero, along with a video where he says, “I am back as Superman.” His announcement comes after he made a cameo appearance in Black Adam, DC’s latest movie, and as we’re starting to hear reports that a sequel to 2013’s Man of Steel is in the works. In his video, Cavill calls the image and his appearance in Black Adam “just a...",
      url: "https://www.theverge.com/2022/10/24/23420886/henry-cavill-superman-role-return-rumors-man-of-steel",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-24T19:05:15+00:00",
    },
    {
      author: "Aria Alamalhodaei",
      title: "Max Q: The ghost in the machine",
      description:
        "In this issue: Kayhan Space presents at Disrupt; Report: Investment in space battered by high interest rates, inflation; News from SpaceX, Orbex and moreMax Q: The ghost in the machine by Aria Alamalhodaei originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/24/max-q-the-ghost-in-the-machine/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-24T22:00:36+00:00",
    },
    {
      author: "Rebecca Bellan",
      title: "China’s XPeng wants to launch robotaxi network using G9 SUV",
      description:
        "Chinese luxury EV startup XPeng is moving forward on its plans to launch a robotaxi business. The company&#8217;s latest G9 SUV became China&#8217;s first mass-produced commercial vehicle to pass a government-led autonomous driving closed-field test, the company said Monday at its fourth annual 1024 Tech Day. When XPeng unveiled the G9 in September, the company [&#8230;]China&#8217;s XPeng wants to launch robotaxi network using G9 SUV by Rebecca Bellan originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/24/chinas-xpeng-wants-to-launch-robotaxi-network-using-g9-suv/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-24T23:44:17+00:00",
    },
    {
      author: "Emma Roth",
      title:
        "Republicans sue Google over ‘discriminatory’ spam filtering practices",
      description:
        "Illustration by Alex Castro / The Verge The Republican National Committee (RNC) is suing Google for allegedly sending “millions” of campaign emails to users’ spam folders (via Axios). According to the lawsuit filed in California’s Eastern District Court on Friday, the RNC accuses Google of “throttling its email messages because of the RNC’s political affiliation and views.”For months, the RNC has been complaining about Google’s alleged spam filtering bias, claiming it disproportionately puts Republican-backed political emails in spam folders when compared to messages sent by...",
      url: "https://www.theverge.com/2022/10/22/23417664/google-lawsuit-republicans-rnc-discriminatory-spam-filtering-policies-politics",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-22T14:46:53+00:00",
    },
    {
      author: "Christine Hall",
      title:
        "Poppin’ bottles: VCs continue to pour millions into independent beverage startups",
      description:
        "Venture capital dollars continue to flow into independent beverage startups. But is there an exit? Poppin’ bottles: VCs continue to pour millions into independent beverage startups by Christine Hall originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/22/poppin-bottles-vcs-continue-to-pour-millions-into-independent-beverage-startups/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-22T16:00:58+00:00",
    },
    {
      author: "Igor Bonifacic",
      title:
        "Microsoft is making it easier for Xbox users to join Discord voice chats",
      description:
        "Microsoft and Discord plan to make joining a voice channel from an Xbox console easier. If you’re a frequent Discord user, you may recall the companies recently launched Xbox One and Xbox Series X/S integration. Following a beta test in July, Discord started rolling out the feature to all Xbox users in September. Unfortunately, in its current iteration, the integration isn’t as straightforward as one would hope; joining a voice chat involves a transfer process that requires the Xbox mobile app.That’s about to change. In a blog post spotted by The Verge, Microsoft announced it was removing...",
      url: "https://www.engadget.com/microsoft-is-making-joining-discord-voice-chat-easier-191055133.html?src=rss",
      source: "Engadget",
      image:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-07/6a8fc710-07a1-11ed-bae3-b7225d97dcba",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-22T19:10:55+00:00",
    },
    {
      author: "David Streitfeld",
      title: "Elon Musk Takes Twitter, and Tech Deals, to Another Level",
      description:
        "Silicon Valley moguls used to buy yachts and islands. Now they are rich enough, and perhaps arrogant enough, to acquire companies they fancy.",
      url: "https://www.nytimes.com/2022/10/28/technology/twitter-deal-musk-tech-companies.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/27/business/00musk-deal/00musk-deal-moth.jpg",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-28T09:00:10+00:00",
    },
    {
      author: "Vittoria Elliott",
      title: "Elon Musk Now Owns Twitter",
      description:
        "After trying and failing to escape his $44 billion deal to buy the platform, Musk is in control and set to make major changes.",
      url: "https://www.wired.com/story/elon-musk-owns-twitter-deal/",
      source: "Wired",
      image:
        "https://media.wired.com/photos/63598e44a398fb738c4b9227/master/pass/Elon-Musk-Closing-Twitter-Deal-Business-GettyImages-1206290122.jpg",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-28T11:57:24+00:00",
    },
    {
      author: "Ivan Mehta",
      title:
        "Twitter will be delisted from the New York Stock Exchange on November 8",
      description:
        "Twitter&#8217;s stock will be delisted from the New York Stock Exchange and become a private company on November 8, according to a new filing with the U.S. Securities and Exchange Commission. This comes a day after Elon Musk completed the company&#8217;s takeover after a lengthy ordeal. &#8220;The New York Stock Exchange hereby notifies the SEC [&#8230;]Twitter will be delisted from the New York Stock Exchange on November 8 by Ivan Mehta originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/28/twitter-will-be-delisted-from-the-new-york-stock-exchange-on-november-8/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-28T12:47:08+00:00",
    },
    {
      author: "Julian Chokkattu",
      title:
        "Best Google Pixel Phone (2022): Which Model to Buy, Cases and Accessories, Feature Drops",
      description:
        "Here’s a guide to all the models—plus case recommendations and hidden software tricks to try.",
      url: "https://www.wired.com/story/best-google-pixel-phone/",
      source: "Wired",
      image:
        "https://media.wired.com/photos/6286d1bd28b05fbe4340ea19/master/pass/Pixel-6a_3_gear.jpg",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-28T14:00:00+00:00",
    },
    {
      author: "Monica Chin",
      title: "How to deactivate your Twitter account",
      description:
        "Illustration by Samar Haddad / The Verge Twitter’s a convenient way to get your memes, world news, and pop culture hot takes all in one place. However, being an active Twitter user requires sifting through a daily deluge of toxic characters, including QAnon, white supremacists, bots, and deepfakes. In addition, a recent change of management may have you strongly considering the advantages of bailing. And there’s no denying the stress and anxiety that the fast pace of Twitter’s news cycle and the strain of constantly debating reply guys can bring. Hear me out on this: you don’t actually...",
      url: "https://www.theverge.com/22227076/twitter-delete-app-how-to-deactivate",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-28T14:04:55+00:00",
    },
    {
      author: "Mitchell Clark",
      title: "Instagram and Facebook are down for some people",
      description:
        "Illustration by Kristen Radtke / The Verge It’s not just you — Instagram and Facebook appear to be completely down for some users, as indicated by reports from Downdetector.com, as well as staff members at The Verge. While not everyone appears to be affected and some people can load all of Meta’s services without an issue, users outside the US, as well as some US residents on the West Coast, appear to be having more problems.If you open both apps and are affected by the issue, you may see some cached content displayed but receive an error message saying that the feed can’t be refreshed...",
      url: "https://www.theverge.com/2022/10/28/23428969/instagram-facebook-not-loading-refresh-outage",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-28T20:10:22+00:00",
    },
    {
      author: "Devin Coldewey",
      title:
        "Cruz Foam’s chitin-based packaging brings in $18M as industries scramble to go green",
      description:
        "The best way to remove plastics from the ecosystem is to make sure they never get there in the first place, and Cruz Foam is well on its way to replacing some of the worst ones out there with its naturally-derived and compostable alternative — and the company just landed an $18M series A to [&#8230;]Cruz Foam&#8217;s chitin-based packaging brings in $18M as industries scramble to go green by Devin Coldewey originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/28/cruz-foams-chitin-based-packaging-brings-in-18m-as-industries-scramble-to-go-green/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-28T20:59:47+00:00",
    },
    {
      author: "Joel Khalili",
      title: "A Chaotic Crypto Launch Reveals How Hard It Is to Beat Ethereum",
      description:
        "When Aptos rose from the ashes of Meta's Diem digital currency project, it aimed to be the fastest crypto network. Instead, it just angered its fans.",
      url: "https://www.wired.com/story/aptos-launch-solana-killer-meta-diem-ethereum/",
      source: "Wired",
      image:
        "https://media.wired.com/clips/6359e835baca2e722bfbc6e2/master/pass/business-aptos-1345558464.mp4",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T11:00:00+00:00",
    },
    {
      author: "Tom Warren",
      title: "Microsoft’s new Xbox Home UI feels like a giant Game Pass ad",
      description:
        "Microsoft started testing a new Xbox Home UI last month that will arrive in 2023. I’ve managed to try an early version of the Home UI this week, and while there are some much-needed improvements, the home section of the Xbox dashboard is starting to feel like one giant Xbox Game Pass ad.The main interface now replaces the larger tile for the most recent app or game, with six tiles that are now all the same size across the top row. These are the latest apps or games, and I’m glad to see that Microsoft has removed apps like Settings and the Microsoft Store from appearing in this recent list...",
      url: "https://www.theverge.com/2022/10/27/23426189/microsoft-xbox-home-new-ui-dashboard-2023",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T11:38:39+00:00",
    },
    {
      author: "Darrell Etherington",
      title: "It’s time to admit self-driving cars aren’t going to happen",
      description:
        "A couple caveats for those going apoplectic over the headline: I mean self-driving isn&#8217;t going to be a thing A) in our lifetimes and B) with any kind of omnipresent scale. So in terms of the daily lived experience of most people reading this, truly autonomous vehicles just aren&#8217;t going to happen. The evidence pointing [&#8230;]It&#8217;s time to admit self-driving cars aren&#8217;t going to happen by Darrell Etherington originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/27/self-driving-cars-arent-going-to-happen/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T12:09:22+00:00",
    },
    {
      author: "Ron Miller",
      title:
        "Persona expands beyond identity verification with new suite of services",
      description:
        "Persona, a four year old identity startup, has done pretty well for itself with its original identity verification idea, an API that lets companies capture various documents like a driver’s license or passport to prove who you are online. It went so well, the company announced today that it has expanded into a full blown [&#8230;]Persona expands beyond identity verification with new suite of services by Ron Miller originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/27/persona-expands-beyond-identity-verification-with-new-suite-of-services/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T14:21:26+00:00",
    },
    {
      author: "Ram Iyer",
      title: "5 tips for launching in a crowded web3 gaming market",
      description:
        "A good strategy is more important than ever, so here are a few tried-and-tested steps you can take to set yourself and your web3 game apart.5 tips for launching in a crowded web3 gaming market by Ram Iyer originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/27/5-tips-for-launching-in-a-crowded-web3-gaming-market/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T14:30:54+00:00",
    },
    {
      author: "Daniel Cooper",
      title: "‘Star Trek: Lower Decks’ finds riches in its own margins",
      description:
        "It’s been a long road, getting from Lower Decks’ slightly rough-around-the-edges first episode to here. But it hasn’t taken that much time, since Star Trek’s first animated sitcom very quickly found its feet to become my favorite Trek of the streaming era. The second season showed a growing confidence in its own execution, and as the third season concludes, we find it proud to show the world what it’s now capable of.The clue, really, was in the swift resolution to the Pakled cliffhanger which ended the second year. On one hand, a sitcom like Lower Decks doesn’t need to turn into The...",
      url: "https://www.engadget.com/star-trek-lower-decks-season-3-episode-10-the-stars-at-night-review-150041363.html?src=rss",
      source: "Engadget",
      image:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-10/d9e924c0-553b-11ed-a65f-aef03fec7013",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T15:00:41+00:00",
    },
    {
      author: "Eric Berger",
      title:
        "Russia threatens a retaliatory strike against US commercial satellites",
      description:
        '"Western actions needlessly put at risk the sustainability of peaceful space activities."',
      url: "https://arstechnica.com/?p=1893219",
      source: "Ars Technica",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T15:56:57+00:00",
    },
    {
      author: "Lauren Forristal",
      title: "Snapchat reduces total payouts for Spotlight creators",
      description:
        "Snapchat has changed the way it pays creators through its Spotlight reward fund. Creators that use Snapchat’s TikTok clone, Spotlight, will now be paid millions per year, a source familiar with the matter told TechCrunch. This marks the second time Snapchat has reduced the payout. In 2021, the company rewarded creators millions per week, down [&#8230;]Snapchat reduces total payouts for Spotlight creators by Lauren Forristal originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/27/snapchat-reduces-total-payouts-for-spotlight-creators/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T18:03:49+00:00",
    },
    {
      author: "Natasha Mascarenhas",
      title:
        "Clubhouse’s Paul Davison on Twitter, the impact of hype and what happened",
      description:
        "Clubhouse CEO and co-founder Paul Davison came to TechCrunch Disrupt to talk about life after the hype and its most formidable competitor, Twitter.Clubhouse’s Paul Davison on Twitter, the impact of hype and what happened by Natasha Mascarenhas originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/27/clubhouses-paul-davison-on-twitter-the-impact-of-hype-and-what-happened/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T18:00:45+00:00",
    },
    {
      author: "Natasha Lomas",
      title:
        "Google filing says EU’s antitrust division is investigating Play Store practices",
      description:
        "A Google regulatory filing appears to have confirmed rumors in recent months that the European Union&#8217;s competition division is looking into how it operates its smartphone app store, the Play Store. However TechCrunch understands that no formal EU investigation into the Play Store has been opened at this stage. The SEC Form 10-Q, filed by [&#8230;]Google filing says EU&#8217;s antitrust division is investigating Play Store practices by Natasha Lomas originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/27/google-play-eu-antitrust/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T18:19:01+00:00",
    },
    {
      author: "Anita Ramaswamy",
      title: "Apple says, ‘NFTs? Yes, fees’",
      description:
        "Welcome back to Chain Reaction, TechCrunch's weekly offering for the crypto curious. Apple says, &#8216;NFTs? Yes, fees&#8217; by Anita Ramaswamy originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/27/chain-reaction-apple-nfts-reddit-rishi-sunak-podcast-newsletter/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T19:00:12+00:00",
    },
    {
      author: "Zack Whittaker",
      title:
        "Amazon accidentally exposed an internal server packed with Prime Video viewing habits",
      description:
        "It feels like every other day another tech startup is caught red-faced spilling reams of data across the internet because of a lapse in security. But even for technology giants like Amazon, it&#8217;s easy to make mistakes. Security researcher Anurag Sen found a database packed with Amazon Prime viewing habits stored on an internal Amazon [&#8230;]Amazon accidentally exposed an internal server packed with Prime Video viewing habits by Zack Whittaker originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/27/amazon-prime-video-server-exposed/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T21:58:40+00:00",
    },
    {
      author: "Rebecca Bellan",
      title:
        "Hidden Door wants to turn fiction into immersive roleplaying experiences",
      description:
        "The first season of &#8220;House of Dragon&#8221; just ended, and I find myself wishing for more. I&#8217;ve seen each episode twice already, read through the lore, and even re-watched some &#8220;Game of Thrones&#8221; episodes. If I had the option to immerse myself in that world and role-play as a dragon-riding Targaryen queen, you bet your [&#8230;]Hidden Door wants to turn fiction into immersive roleplaying experiences by Rebecca Bellan originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/27/hidden-door-wants-to-turn-fiction-into-immersive-roleplaying-experiences/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T23:43:55+00:00",
    },
    {
      author: "Tage Kene-Okafor",
      title:
        "54gene valuation slashed by over $100M amid job cuts and CEO exit",
      description:
        "It’s been a strange couple of months at African genomics startup 54gene. In August, it sacked 95 employees, mostly contract staff (in labs and sales departments) hired to work in 54gene’s COVID business line launched in 2020. In September, co-founder and VP of Engineering Ogochukwu Francis Osifo left the company. And this week, founder and [&#8230;]54gene valuation slashed by over $100M amid job cuts and CEO exit by Tage Kene-Okafor originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/28/54gene-valuation-slashed-by-over-100m-amid-job-cuts-and-ceo-exit/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-28T07:12:07+00:00",
    },
    {
      author: "Natasha Lomas",
      title:
        "Shutterstock to integrate OpenAI’s DALL-E 2 and launch fund for contributor artists",
      description:
        "Stock image giant Shutterstock has announced a major push into AI generated imagery today in partnership with OpenAI, expanding on a strategic tie-up the pair announced last year. The partnership between Shutterstock and OpenAI will see the latter&#8217;s DALL-E 2 image-generating AI system integrating with Shutterstock content and made available to Shutterstock users worldwide &#8212; [&#8230;]Shutterstock to integrate OpenAI&#8217;s DALL-E 2 and launch fund for contributor artists by Natasha Lomas originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/25/shutterstock-openai-dall-e-2/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-25T12:01:26+00:00",
    },
    {
      author: "Carly Page",
      title:
        "Hive ransomware gang leaks data stolen during Tata Power cyberattack",
      description:
        "The Hive ransomware group has claimed responsibility for the recent cyberattack on Tata Power, a leading Indian energy company, and has started leaking stolen employee data. Tata Power, which serves more than 12 million customers through its distributors, confirmed on October 14 that it had been hit by a cyberattack that impacted some of its [&#8230;]Hive ransomware gang leaks data stolen during Tata Power cyberattack by Carly Page originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/25/tata-power-hive-ransomware/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-25T13:11:49+00:00",
    },
    {
      author: "Lauren Forristal",
      title: "Apple’s iMessage and FaceTime experience issues for some users",
      description:
        "First, WhatsApp went down this morning. Now, Apple&#8217;s iMessage and FaceTime appeared to experience an outage in the U.S. this afternoon. Several Twitter users noted they were having issues and Apple&#8217;s System Status dashboard had iMessage and FaceTime marked for having issues. &#8220;Some users are affected,&#8221; the status said. Now the status has changed to [&#8230;]Apple&#8217;s iMessage and FaceTime experience issues for some users by Lauren Forristal originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/25/apple-imessage-outage/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-25T16:43:20+00:00",
    },
    {
      author: "Alex Wilhelm",
      title: "Five questions to consider ahead of Big Tech’s Q3 earnings",
      description:
        "To help you cut a useful line through the upcoming numerical flurry, here are five questions that we want to answer in the coming days.Five questions to consider ahead of Big Tech&#8217;s Q3 earnings by Alex Wilhelm originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/25/five-questions-to-consider-ahead-of-big-techs-q3-earnings/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-25T17:30:44+00:00",
    },
    {
      author: "Karen Weise",
      title: "Microsoft Quarterly Earnings Show Slowest Growth in Five Years",
      description:
        "The technology giant faced a strong U.S. dollar and weakening demand for personal computers in its latest financial results.",
      url: "https://www.nytimes.com/2022/10/25/technology/microsoft-earnings.html",
      source: "The New York Times",
      image:
        "https://static01.nyt.com/images/2022/10/25/business/25MICROSOFT-EARNINGS-1/25MICROSOFT-EARNINGS-1-moth.jpg",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-25T20:52:08+00:00",
    },
    {
      author: "Lauren Hirsch",
      title:
        "Elon Musk Seems to Answer to No One. Except for a Judge in Delaware.",
      description:
        "Kathaleen St. J. McCormick, the chief judge of Delaware’s Chancery Court, gave Mr. Musk until Friday to acquire Twitter. She is also the judge in at least one other case involving the billionaire.",
      url: "https://www.nytimes.com/2022/10/26/technology/musk-twitter-delaware-judge-mccormick.html",
      source: "The New York Times",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-26T07:00:09+00:00",
    },
    {
      author: "Darrell Etherington",
      title:
        "Twitter’s Elon problem could soon become Apple’s Elon problem, too",
      description:
        "Reports indicate Elon Musk is on track to close his purchase of mildly popular bird website Twitter dot com as of this Friday, which is when he&#8217;s been ordered by the judge in the ongoing legal fracas to do so anyway. The deal closing is bound to have huge impacts, for Twitter employees themselves; for [&#8230;]Twitter&#8217;s Elon problem could soon become Apple&#8217;s Elon problem, too by Darrell Etherington originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/26/twitters-elon-problem-could-soon-become-apples-elon-problem-too/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-26T12:10:32+00:00",
    },
    {
      author: "Jagmeet Singh",
      title: "Zillow lays off 300 employees in latest workforce shift",
      description:
        "Zillow has laid off about 300 employees as it is shifting focus towards technology-related positions in the company, TechCrunch has learned from sources and confirmed with the company over e-mail. The Seattle-headquartered online real estate marketplace informed its impacted employees about the decision on Tuesday. Shortly after receiving the communication, the impacted employees had to [&#8230;]Zillow lays off 300 employees in latest workforce shift by Jagmeet Singh originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/26/zillow-layoff-300-employees/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-26T16:35:42+00:00",
    },
    {
      author: "Rebecca Bellan",
      title:
        "Ford takes $2.7B hit on Argo shutdown, shifts its bet to driver assist tech",
      description:
        "As the third-quarter earnings drumbeat continues, we learned more about the state of global supply chains, global consumer appetite for big-ticket items and the future of self-driving technology. After the bell this afternoon, Ford beat Wall Street analyst revenue estimates of $36.25 billion, per Yahoo Finance, with automotive Q3 2022 top line of $37.2 billion, [&#8230;]Ford takes $2.7B hit on Argo shutdown, shifts its bet to driver assist tech by Rebecca Bellan originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/26/ford-takes-2-7b-hit-on-argo-shutdown-shifts-its-bet-to-driver-assist-tech/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-26T21:34:09+00:00",
    },
    {
      author: "Mariella Moon",
      title:
        "Apple pulls gambling ads from App Store product pages following backlash",
      description:
        'On October 25th, Apple started displaying more ads in the App Store, particularly in the "Today" tab and at the bottom of app listings. Since then, multiple developers have complained about getting ads for gambling under their listings\' "You Might Also Like" section, when they have nothing to do with their applications. One of those developers was Marco Arment, who posted a screenshot on Twitter showing gambling advertisements on the App Store page for his podcast app Overcast. Other developers reported having the same issue and made it clear that they weren\'t OK with casino ads in their...',
      url: "https://www.engadget.com/apple-pulls-gambling-ads-from-app-store-product-pages-082207219.html?src=rss",
      source: "Engadget",
      image:
        "https://s.yimg.com/os/creatr-images/2020-03/51328a80-652a-11ea-bffb-88b19fc42fdd",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T08:22:07+00:00",
    },
    {
      author: "Jon Fingas",
      title: "Amazon now lets you pay using Venmo",
      description:
        "Your Venmo money is now useful for much more than covering your share of last night's pizza. As promised last year, Amazon is rolling out the option to use either your Venmo balance, a linked bank account or an associated debit card for payments. You can make Venmo the default if you like, and that service's purchase protection still applies in addition to Amazon's own safeguards.The Venmo option is available to some Amazon shoppers today. It should be widely available in the US by Black Friday (the day after Thanksgiving), the company says. You can add the choice through Amazon's website or...",
      url: "https://www.engadget.com/amazon-venmo-payment-option-130142262.html?src=rss",
      source: "Engadget",
      image:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-10/7c383b90-53a6-11ed-97b9-50f7ffe9dac9",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-25T13:01:42+00:00",
    },
    {
      author: "Daniel Cooper",
      title: "Future ‘Doctor Who’ seasons will air on Disney+",
      description:
        "The BBC and Disney have announced future seasons of Doctor Who will stream on Disney+ outside the UK and Ireland. It’s the validation of a longstanding rumor that the UK’s public broadcaster was looking to move the show from its traditional distribution network.Back in July, Bloomberg reported that Disney was looking for “established” brands to bolster its streaming platform. The world’s longest-running science-fantasy series, with its own global fanbase, certainly counts as a big draw for any global streamer.Naturally, new series of Doctor Who will continue to air on the BBC’s own...",
      url: "https://www.engadget.com/doctor-who-disney-plus-2023-150040129.html?src=rss",
      source: "Engadget",
      image:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-10/cd674c10-5471-11ed-bf7f-b2f615c93c88",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-25T15:00:40+00:00",
    },
    {
      author: "Jay Peters",
      title:
        "Google is giving Workspace Individual subscribers a big storage bump",
      description:
        "You’ll be able to store a lot more stuff in your Workspace account. | Illustration: The Verge Google is about to give Workspace Individual subscribers a whole lot more storage. Soon, every account will be upgraded from 15GB to 1TB of storage, the company announced on Tuesday, meaning people on that tier will be able to store a lot more than before.Google launched Workspace Individual in July 2021 as a way for one-person businesses to use some of the company’s more premium Workspace perks without having to pay for higher-priced options designed for larger enterprises. While this increased...",
      url: "https://www.theverge.com/2022/10/25/23423170/google-workspace-individual-storage-increase-bump-1-tb",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-25T18:41:04+00:00",
    },
    {
      author: "Ingrid Lunden",
      title:
        "Trigo raises $100M to expand its Amazon-style cashier-free store technology",
      description:
        "Amazon has become the pacemaker in commerce, and today a startup that&#8217;s been building technology to help retailers keep up with it in the world of physical stores is announcing some funding to expand its business. Trigo, an Israeli startup that builds technology for stores to operate cashier-free, &#8220;just walk out&#8221; experiences similar to those [&#8230;]Trigo raises $100M to expand its Amazon-style cashier-free store technology by Ingrid Lunden originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/26/trigo-raises-100m-to-expand-its-amazon-style-cashier-free-store-technology/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-26T10:30:13+00:00",
    },
    {
      author: "Steve Dent",
      title:
        "Sony's high-resolution A7R V mirrorless camera now shoots 8K video",
      description:
        'Sony has launched the $3,900 A7R V, its latest mirrorless camera designed to shoot portraits, landscapes and other subjects that require as much resolution as possible. The new model carries the same 61-megapixel resolution as the A7R IV, but has a much more powerful new Bionz XR processor that allows for improved AI autofocus, better shake reduction and 8K 24p video.&nbsp;The key improvement is in the autofocus, as the A7R V is Sony\'s first camera to introduced something called "human pose estimation." The system can see 20 different points in the human body and and thus figure out where the...',
      url: "https://www.engadget.com/sony-a7r-5-mirrorless-camera-61-megapixels-8k-video-152052459.html?src=rss",
      source: "Engadget",
      image:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-10/5f03f640-553b-11ed-be7c-a13dbf1c834f",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-26T15:20:52+00:00",
    },
    {
      author: "Mike Butcher",
      title:
        "New Paris-based VC Satgana completes the first close of its €30M fund to back ClimateTech startups",
      description:
        "While ClimateTech may be all the rage right now &#8211; and for good reasons &#8211; new VC Paris-based firm Satgana (which means “a good company” in Sanskrit) is hoping its take on the subject will gain traction. It’s now completed the first closing of a target €30m fund to back startups in areas such as [&#8230;]New Paris-based VC Satgana completes the first close of its €30M fund to back ClimateTech startups by Mike Butcher originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/26/new-paris-based-vc-satgana-completes-the-first-close-of-its-e30m-fund-to-back-climatetech-startups/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-26T17:36:42+00:00",
    },
    {
      author: "Amanda Silberling",
      title: "The end is (maybe) near: Elon Musk is at Twitter HQ",
      description:
        "Shortly after changing his bio to &#8220;Chief Twit,&#8221; Elon Musk posted a video of himself walking into Twitter&#8217;s San Francisco headquarters. &#8220;Entering Twitter HQ &#8212; let that sink in!&#8221; he wrote. The video depicted him walking into the office holding a sink, referencing a years-old, stale meme, as is par for the course with him. [&#8230;]The end is (maybe) near: Elon Musk is at Twitter HQ by Amanda Silberling originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/26/elon-musk-twitter-hq-deal/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-26T19:01:50+00:00",
    },
    {
      author: null,
      title: "Black women missing from tech industry, says report",
      description:
        "A report says an additional 20,000 black women need to be recruited to match numbers in the wider workforce.",
      url: "https://www.bbc.co.uk/news/technology-63402337?at_medium=RSS&at_campaign=KARANGA",
      source: "BBC News - Technology",
      image: null,
      category: "technology",
      language: "en",
      country: "gb",
      published_at: "2022-10-27T01:21:31+00:00",
    },
    {
      author: null,
      title:
        "Generally Intelligent (YC S17) Is Hiring Senior Software Engineers",
      description: "Comments",
      url: "https://news.ycombinator.com/item?id=33354199",
      source: "Hacker News",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-27T07:05:37+00:00",
    },
    {
      author: "Matt Burns",
      title: "What if your startup doesn’t take off overnight?",
      description:
        "Natalie Gordon founded Babylist in 2011, and today it’s a leading marketplace for baby gift registries. But it didn’t take off at first. It took several years for Gordon to spin the startup into its current trajectory and several more for users to follow. This is normal! And we’re excited to have Jesse Draper join [&#8230;]What if your startup doesn’t take off overnight? by Matt Burns originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/29/what-if-your-startup-doesnt-take-off-overnight/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-29T16:30:59+00:00",
    },
    {
      author: "Sarah Perez",
      title:
        "This Week in Apps: Elon buys Twitter, new App Store rules, gambling ads backlash",
      description:
        "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy. Global app spending reached $65 billion in the first half of 2022, up only slightly from the $64.4 billion during the same period in 2021, as hypergrowth fueled by [&#8230;]This Week in Apps: Elon buys Twitter, new App Store rules, gambling ads backlash by Sarah Perez originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/29/this-week-in-apps-elon-buys-twitter-new-app-store-rules-gambling-ads-backlash/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-29T18:00:33+00:00",
    },
    {
      author: null,
      title: "Promoted.ai (YC W21) Is Hiring a Staff Data Engineer (Flink)",
      description: "Comments",
      url: "https://www.ycombinator.com/companies/promoted/jobs/wc5X1S4-staff-data-engineer-flink",
      source: "Hacker News",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-29T21:00:29+00:00",
    },
    {
      author: "Rebecca Bellan",
      title:
        "Remote work is here to stay. Here’s how to manage your staff from afar",
      description:
        "At this year's TechCrunch Disrupt, three panelists talked about the challenges and opportunities of managing staff in a remote work world.Remote work is here to stay. Here&#8217;s how to manage your staff from afar by Rebecca Bellan originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/30/remote-work-is-here-to-stay-heres-how-to-manage-your-staff-from-afar/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-30T19:00:08+00:00",
    },
    {
      author: "Emma Roth",
      title:
        "Twitter battles hateful trolling campaign following Elon Musk's takeover",
      description:
        "Illustration by Alex Castro / The Verge Twitter’s combatting an increase in hateful tweets after Elon Musk officially acquired the company on Friday. Yoel Roth, the platform’s head of safety and integrity, said on Twitter that the company’s taking action against an “organized effort” to spread hate speech on the platform.According to Roth, a “small number” of accounts posted a rash of tweets containing “slurs and other derogatory terms” over the past two days, with the goal of making users think Twitter’s policies surrounding content moderation have changed. Roth says that...",
      url: "https://www.theverge.com/2022/10/30/23431337/twitter-hateful-tweets-elon-musk-takeover-free-speech",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-30T20:06:54+00:00",
    },
    {
      author: null,
      title: "UK Ex-PM Liz Truss Texted US S.ofState Blinken: “It's Done”",
      description: "Comments",
      url: "https://www.alvinalexa.com/2022/10/united-kingdoms-former-prime-minister.html",
      source: "Hacker News",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-30T20:30:14+00:00",
    },
    {
      author: null,
      title:
        "Charge Robotics (YC S21) is hiring meches to build robots that build solar farms",
      description: "Comments",
      url: "https://www.ycombinator.com/companies/charge-robotics/jobs/VFEVUkD-mechanical-engineer",
      source: "Hacker News",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-30T21:01:09+00:00",
    },
    {
      author: "Alex Heath",
      title:
        "Twitter is planning to start charging $20 per month for verification",
      description:
        "Illustration by Alex Castro / The Verge Now that he owns Twitter, Elon Musk has given employees their first ultimatum: Meet his deadline to introduce paid verification on Twitter or pack up and leave.The directive is to change Twitter Blue, the company’s optional, $4.99 a month subscription that unlocks additional features, into a more expensive subscription that also verifies users, according to people familiar with the matter and internal correspondence seen by The Verge. Twitter is planning to charge $19.99 for the new Twitter Blue subscription, though that price is subject to change...",
      url: "https://www.theverge.com/2022/10/30/23431931/twitter-paid-verification-elon-musk-blue-monthly-subscription",
      source: "The Verge",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-31T00:52:51+00:00",
    },
    {
      author: "Andrew Tarantola",
      title:
        "Mopar shows off its electrified Jeep 'CJ Surge' concept at SEMA 2022",
      description:
        "As the 2022 Specialty Equipment Market Association (SEMA) trade show kicks off Monday in Las Vegas, Mopar — Stellantis' OEM accessory division — unveiled a trio of intriguing concept vehicles, led by an electrified Jeep CJ. Even more exciting, the battery electric technology behind it could portend a restomod revival of classic American muscle cars.Stellantis“The Jeep CJ Surge concept explores a future zero-emission propulsion system kit and supports the Jeep brand’s mission to become the leading electrified SUV brand in the world,\" Mark Bosanac, North America senior vice president...",
      url: "https://www.engadget.com/mopar-shows-off-its-electrified-jeep-cj-surge-concept-at-sema-2022-040143219.html?src=rss",
      source: "Engadget",
      image:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-10/b0508152-56ec-11ed-ad79-23f93ba51eed",
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-31T04:01:43+00:00",
    },
    {
      author: "Ram Iyer",
      title: "How to effectively manage a remote team during wartime",
      description:
        "When the Russo-Ukrainian War began on February 24, all Ukrainian businesses faced a crisis. I'll use our example to explain how we dealt with it.How to effectively manage a remote team during wartime by Ram Iyer originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/31/how-to-effectively-manage-a-remote-team-during-wartime/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-31T08:00:55+00:00",
    },
    {
      author: "Manish Singh",
      title:
        "Hong Kong to explore legalizing retail crypto trades in reversal of previous proposal",
      description:
        "Hong Kong has proposed allowing retail investors to trade in cryptocurrencies and crypto exchange-traded funds and plans to conduct pilots in NFT issuance and CBDC as it looks to regain its status as a global financial hub. The city had earlier proposed limiting crypto trade to professional investors, a move that saw many crypto entrepreneurs [&#8230;]Hong Kong to explore legalizing retail crypto trades in reversal of previous proposal by Manish Singh originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/31/hong-kong-to-explore-legalizing-retail-crypto-trades-in-reversal-of-previous-proposal/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-31T09:27:17+00:00",
    },
    {
      author: "Ivan Mehta",
      title: "Invygo raises $10M to make long-term car subscription a breeze",
      description:
        "Invygo, a startup operating in UAE and Saudi Arabia, has raised $10 million in its Series A funding led by MEVP as it works to scale its car rental service in the region. The Middle East-based startup, founded by Eslam Ahmed Hussein and Pulkit Ganjoo in 2019, has raised $14.3 million to date. Al Rajhi [&#8230;]Invygo raises $10M to make long-term car subscription a breeze by Ivan Mehta originally published on TechCrunch",
      url: "https://techcrunch.com/2022/10/31/invygo-raises-10m-to-make-long-term-car-subscription-a-breeze/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-10-31T09:33:17+00:00",
    },
    {
      author: "Catherine Shu",
      title:
        "Accacia tackles the real estate industry’s massive carbon emissions problem",
      description:
        "The real estate and infrastructure sectors contribute about 40% of global carbon emissions, and part of solving the climate crisis is fixing how those industries work. Accacia gives large property owners a way to track their carbon impact in real-time by integrating with ERPs and property management systems like Yardi. It’s already been deployed to [&#8230;]Accacia tackles the real estate industry’s massive carbon emissions problem by Catherine Shu originally published on TechCrunch",
      url: "https://techcrunch.com/2022/12/05/accacia-funding/",
      source: "TechCrunch",
      image: null,
      category: "technology",
      language: "en",
      country: "us",
      published_at: "2022-12-06T03:00:14+00:00",
    },
  ],
};

const getAll = (category) => {
  return axios.get(
    `https://api.mediastack.com/v1/news?access_key=ef55b04ff5ebf918007353428dfda7c2&date=${last30Days},${dayjs().format("YYYY-MM-DD")}&languages=en&limit=100&categories=${category}`
  );
};

const NewsService = {
  getAll,
};

export default NewsService;
