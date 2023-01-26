const imageArr = {
  general: [
    "https://img.freepik.com/free-photo/worker-reading-news-with-tablet_1162-83.jpg?w=1800&t=st=1674766152~exp=1674766752~hmac=002cb8628248b0007e40d21e5c870310a787d5e1d1dd249d9f5d61baa41e35a2",
    "https://img.freepik.com/free-photo/toy-bricks-table-with-word-news_144627-47478.jpg?w=1800&t=st=1674766167~exp=1674766767~hmac=cd9cb1a4fbf4bc7fd2508a6468ff91980c04aa1e6a78da72bae13ae9e877584b",
    "https://img.freepik.com/free-photo/globe-technology-business-with-gradient-wallpaper_53876-97642.jpg?w=2000&t=st=1674766178~exp=1674766778~hmac=e1250e2afb5663485cb1356a0289068c79114e95c55ae5450cab9fc5df80486c",
    "https://img.freepik.com/premium-vector/digital-world-news-studio-background-news-report-breaking-news_236657-2883.jpg?w=2000",
    "https://img.freepik.com/free-photo/man-reading-newspaper_53876-89052.jpg?w=1800&t=st=1674766238~exp=1674766838~hmac=f7280c7f2e5ed0c7c990d0f635b3232e213f2cb56d4beeece79f6e452fc88b8d",
    "https://img.freepik.com/free-photo/businessman-working-with-tablet_1162-84.jpg?w=1800&t=st=1674766254~exp=1674766854~hmac=c09a34ad2f4cb5c7b99c8a8eb09386307f17695822ae031e2e05ffd65899a1f3",
    "https://i.postimg.cc/X791WgzM/network-connection-graphic-overlay-background-computer-screen.png",
    "https://i.postimg.cc/0y8ns1Sm/SL-112119-25250-40-Converted-01.png",
  ],
  business: [
    "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000&t=st=1674765449~exp=1674766049~hmac=aaad025881e62c950bc2a5a888b5a590d1827ce5577d7510256efa5205e421ae",
    "https://img.freepik.com/free-photo/workers-considering-term-agreement_1098-1517.jpg?w=1800&t=st=1674765504~exp=1674766104~hmac=a51e069355f669ead3fb545e075c21b4ffb9ba6e5477eecea7e62e1bbdc849b8",
    "https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg?w=1800&t=st=1674765517~exp=1674766117~hmac=ba33de1e67d88f365249a16bff66637a8479359b114e59e6fc0f80e3320146c8",
    "https://img.freepik.com/free-photo/documents-with-charts-touchpad-desk_1098-241.jpg?w=1800&t=st=1674765526~exp=1674766126~hmac=2b9285882b8f38acc8ac4fa4c3f7ade3f1398a6a09924e299f39f25fd86fc021",
    "https://img.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg?w=1800&t=st=1674765537~exp=1674766137~hmac=2ea12e235bbf071a5b9f80fce5b43e8299f3bd8aa1eb03f385bef247dafcb944",
    "https://img.freepik.com/free-photo/group-business-people-brainstorming-with-silhouette-sunset_53876-144317.jpg?w=1800&t=st=1674765547~exp=1674766147~hmac=de7b60a44993cf494dbe4b3df6a5f8f41611890d3006a622bc169eb1dd751375",
    "https://img.freepik.com/free-photo/business-people-walking-outside-office-building_107420-74359.jpg?w=1800&t=st=1674765560~exp=1674766160~hmac=ef0cc5246b1104ca5826ba4293fbb2914d79bc32e6c841a76a34ff25abeb2981",
    "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15779.jpg?w=1800&t=st=1674765570~exp=1674766170~hmac=ad50f319157a83cd8d78c876dfbe8f6dc7ff0acb4ff900201439b3307c8daa79",
    "https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=1800&t=st=1674765579~exp=1674766179~hmac=1c0f3ea6cb83afeee0af8434697b4ddbffcb67d865f7346bb6921c566c5f16d3",
  ],
  entertainment: [
    "https://img.freepik.com/free-photo/closeup-dj-working-blue-light_181624-18773.jpg?w=2000&t=st=1674765689~exp=1674766289~hmac=91d05a19c54d16bce2377fcb9a0b32b4b3c65be18e595fa947b965779937a097",
    "https://img.freepik.com/free-photo/close-up-microphone-concert-stage-with-beautiful-lighting_169016-11073.jpg?w=1800&t=st=1674765703~exp=1674766303~hmac=8ca7d3cb8e3cf59fc90cf3d43ee9601ec963c27caf894b43956428589ca5a85c",
    "https://img.freepik.com/free-photo/rear-view-excited-people-with-arms-raised-having-fun-while-watching-confetti-fireworks-front-stage-music-festival-copy-space_637285-568.jpg?w=2000&t=st=1674765712~exp=1674766312~hmac=c6a2510b7bf9a125889b3d3fecf87b38d407d40c3d0af5dc728b07c647a02b63",
    "https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?w=1800&t=st=1674765719~exp=1674766319~hmac=9c6cdbc17d5ea37e525032296cd5d32df65bf511d381d928d022690e8a3e5c7e",
    "https://img.freepik.com/free-photo/hollywood-celebrity-red-dress-posing-black-background_197531-29115.jpg?w=1800&t=st=1674765728~exp=1674766328~hmac=662a0dc1a9f04444a4dd52e2793e6f8758cc61720e5b44394489c97763ee4df8",
    "https://img.freepik.com/free-photo/cheerful-elegant-woman-sunglasses-black-festive-dress-dances-white-background-with-gold-confetti_197531-29666.jpg?w=1800&t=st=1674765737~exp=1674766337~hmac=89701386a4b381525d698e064581ac06985c1e216c49ccb962d9becc7b7daa2a",
    "https://img.freepik.com/free-photo/portrait-woman-making-selfie-instant-camera_158595-3892.jpg?w=1800&t=st=1674765746~exp=1674766346~hmac=78700b6c6c3bb1568e70cd106cbaea4d6ee787945559cfaa8352e3dd62e7ab4f",
    "https://img.freepik.com/premium-photo/young-charismatic-bearded-disk-jockey-mixer-play-famous-music-party-nightclub-pointing-finger-camera_201836-1890.jpg?w=1800",
    "https://img.freepik.com/free-photo/young-sportive-man-daancing-breakdance-isolared-black-backgrounf-neon-with-mixed-lights_155003-45629.jpg?w=1800&t=st=1674765765~exp=1674766365~hmac=f608406836ace4cfa88a07a9aa2c29b0836e604cfbd20a423822b38d66567e89",
  ],
  health: [
    "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=1800&t=st=1674765804~exp=1674766404~hmac=a091e4f966142788049e53cb9a0d54c0525bd99c6544668ca98e403e6598c87d",
    "https://img.freepik.com/free-photo/front-view-woman-holding-heart-shape_23-2148635112.jpg?w=2000&t=st=1674765816~exp=1674766416~hmac=65b1d277232cba13aa3167a2f569a3bda53465651240514a8bba34d6496c70a5",
    "https://img.freepik.com/free-photo/young-happy-woman-golden-field-sunset_158595-5693.jpg?w=1800&t=st=1674765827~exp=1674766427~hmac=d606bfd7822d3d9e6824978352aaf12fd0fdd61fa0caa8293235d7cb834afb39",
    "https://img.freepik.com/free-photo/closeup-support-hands_53876-14963.jpg?w=1800&t=st=1674765837~exp=1674766437~hmac=cd1387ed1db1398b0419020b544ec24eb08bf076d66ba2cd1c70d211d15f2e6b",
    "https://img.freepik.com/free-photo/young-woman-doing-sport-exercises-sunrise-beach-morning_285396-7898.jpg?w=1800&t=st=1674765849~exp=1674766449~hmac=4019340a4cae41cdcc2e5d70e3114e9f520642961c5fc76ee45c5b81513cf1b5",
    "https://img.freepik.com/free-photo/healthy-young-asian-runner-woman-warm-up-body-stretching-before-exercise_7861-1084.jpg?w=1800&t=st=1674765859~exp=1674766459~hmac=969d745cdaa3392cddc6bbcda96e9659e602fb31922d2076391733a49f4943aa",
    "https://img.freepik.com/free-photo/bag-groceries-with-copy-space_23-2148262102.jpg?w=1800&t=st=1674765873~exp=1674766473~hmac=3db13c32adffe421ec4b92ed913ba50b4c0e5dfd7dfe80e8e0a0a24d072d415c",
    "https://img.freepik.com/free-photo/beautiful-young-woman-meditating-exercising-top-him_1150-15308.jpg?w=1800&t=st=1674765882~exp=1674766482~hmac=7437dc00b3c8f4fee4313ec2ad17440765d079fe2c99d01503012515df6e3fd3",
    "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-face-mask_23-2149611197.jpg?w=2000&t=st=1674765890~exp=1674766490~hmac=b73a2fb712f2d9e15538b67224903574f1ffa974c6fd4f58e437c43f013195f5",
  ],
  science: [
    "https://img.freepik.com/free-vector/hand-drawn-scientific-formulas-chalkboard_23-2148495302.jpg?w=1800&t=st=1674766060~exp=1674766660~hmac=3e397f9ed14310f3844ff6790cfb356b073c49b1adc0294f8c9cf80624785e26",
    "https://img.freepik.com/free-vector/science-word-theme_23-2148540555.jpg?w=1800&t=st=1674766073~exp=1674766673~hmac=6a9a1718b4acefa89ce47134e412b57ef9e419afc95f519f237767b0fc0cca4b",
    "https://img.freepik.com/free-photo/close-up-researcher-holding-glassware_23-2148794430.jpg?w=2000&t=st=1674766081~exp=1674766681~hmac=f629e8f53de8902928c3a95b7bc40a6c99d3c28fac7e8d3b02a7933c62e3705f",
    "https://img.freepik.com/free-photo/3d-science-modern-network-communications-background_1048-12787.jpg?w=1480&t=st=1674766090~exp=1674766690~hmac=c277ed7554a955181602a3d75cb5cea1ee7ffe56c10cd2457fe0357f1c6cb68a",
    "https://img.freepik.com/free-vector/futuristic-science-lab-backround-concept_23-2148510132.jpg?w=1800&t=st=1674766097~exp=1674766697~hmac=01609baa033b15278249bb6f9da7f9ef847f1548f5e8dc2c3f6eb8c6b9d7e38e",
    "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=1800&t=st=1674766104~exp=1674766704~hmac=3776109745926bdc08576c30a4fe5ce996c00fb53cc0d74b6ed5bcf74ace294b",
    "https://img.freepik.com/free-photo/dna-closely_1048-2632.jpg?w=1480&t=st=1674766111~exp=1674766711~hmac=12ca44d913f89d6dec2137e627bda1b28faeeb6281baf468211b9909a48744e8",
    "https://img.freepik.com/free-photo/close-up-researcher-working-with-microscope_23-2148882102.jpg?w=1800&t=st=1674766122~exp=1674766722~hmac=9a7d81d56736b6227f1e2cc5322848b5a4dd56ed9489cb02126cd97bce39375f",
    "https://img.freepik.com/free-photo/microbiologist-doctor-taking-blood-sample-tube-from-rack-with-machines-analysis-lab-background_482257-527.jpg?w=2000&t=st=1674766130~exp=1674766730~hmac=1419f3570ba4dc4bac1a502349dbc94efb669965d04dc892d5f3f243b2838f82",
  ],
  sports: [
    "https://img.freepik.com/free-photo/confident-young-caucasian-male-football-soccer-player-sportwear-boots-kicking-ball-goal-mixed-light-dark-wall-concept-healthy-lifestyle-professional-sport-hobby_155003-36614.jpg?w=1800&t=st=1674765923~exp=1674766523~hmac=c64f9a0654ae1c08193f1cf9db7013819151c3d20378f02bd34938483e9574bb",
    "https://img.freepik.com/free-photo/flight-handsome-african-american-male-basketball-player-motion-action-neon-light-blue-wall_155003-40476.jpg?w=1800&t=st=1674765934~exp=1674766534~hmac=ad6d0bd758f1d6ebf9874d13489ae8ace848224e8db4d8bcfe8a3858ec704305",
    "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1800&t=st=1674765947~exp=1674766547~hmac=5b073654fb105d4f65e9bef01b4320035f7e1374972694bf9a5b762ac8ee1590",
    "https://img.freepik.com/free-photo/empty-football-field-green-grass_155003-2491.jpg?w=1800&t=st=1674765977~exp=1674766577~hmac=e97250510a764cdfeb0a5d88b3e57ac0f4e9b7e041b07a33cb20eec024e917d9",
    "https://img.freepik.com/free-photo/stadium-background-with-green-grass-pitch-daytime_1150-5272.jpg?w=1800&t=st=1674765989~exp=1674766589~hmac=a4083dd13e0cbd2a86208c7614998f8e480b3340cacf3e4aca572f46be872656",
    "https://img.freepik.com/free-vector/stadium-lights-realistic-composition-with-show-technology-symbols_1284-26849.jpg?w=2000&t=st=1674765998~exp=1674766598~hmac=b931a10c0e295ffcc31da9afc56f60623fd57be389fdf160d9468851e65e5b2b",
    "https://img.freepik.com/free-photo/video-camera-recording-football-match_1137-258.jpg?w=1800&t=st=1674766010~exp=1674766610~hmac=2b90967c401d0f258ca385a30c2915e1510840a98eeab14d0bbe560ae4c7acb0",
    "https://img.freepik.com/free-vector/background-with-person-running_1017-6272.jpg?w=1060&t=st=1674766020~exp=1674766620~hmac=4202e293eab70279bc670b2194906eb4e257dd01d9348c53d8f96d324efe9477",
    "https://img.freepik.com/free-photo/young-man-runner-tying-shoelaces_1421-46.jpg?w=1800&t=st=1674766033~exp=1674766633~hmac=0a659647f53ad6c41a84a3efcc9932997a37eefeb450b56fbbd8b849a440eb74",
    "https://img.freepik.com/free-photo/sport-news-with-camera-recording_23-2149900288.jpg?w=1800&t=st=1674766040~exp=1674766640~hmac=b0ae9604f2b5d07a4bd990feb99954e249d00c235e60ea0cbdd752cf048b6d9b",
  ],
  technology: [
    "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=1800&t=st=1674765601~exp=1674766201~hmac=197c6f2595e5be215b528e6573fdf01f2826001bb65a2b3cf27a633c1781c6b7",
    "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=2000&t=st=1674765613~exp=1674766213~hmac=66333b4e2140d32caf9e64116fe3967226ea0d0431d3088e7fec63bb54027949",
    "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds_181624-11068.jpg?w=2000&t=st=1674765622~exp=1674766222~hmac=0a466351e7555795cf36df193331392b6efbe93b0a66213c9fcf74823a6f17de",
    "https://img.freepik.com/free-photo/man-hand-holding-virtual-world-with-internet-connection-metaverse-global-business-marketing-banking-financial-pass-thru-application-technology-concept_616485-32.jpg?w=1800&t=st=1674765630~exp=1674766230~hmac=e186ef8a01211d99a54d92a8f92026e0d40131744f594c9e01d12faab7879409",
    "https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg?w=1800&t=st=1674765641~exp=1674766241~hmac=160474adfad677a25e4387c88a69948b5628283e2bbbb473645733b429f0bdd8",
    "https://img.freepik.com/free-photo/businessman-using-digital-tablet_53876-108317.jpg?w=2000&t=st=1674765650~exp=1674766250~hmac=e45030b08db28fc94d7f22845f3e30e9bb9d62078c11fc29fef9d5f609357457",
    "https://img.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104197.jpg?w=1800&t=st=1674765660~exp=1674766260~hmac=fcabbe544246eaa1fb009f2f654bd086846bf403f74155cf8b06e663594481ee",
    "https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?w=1800&t=st=1674765669~exp=1674766269~hmac=15c6cfc339f479999bf8e3cf8684d515a2dc034e9e3cab8a2823808016c3fff4",
    "https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-131.jpg?w=2000&t=st=1674765681~exp=1674766281~hmac=52e834e39f08f04c9af9d5473f853a63933147dc6b164786e147d2be30216c28",
  ],
};

function mostViewSort(data) {
  let initial = 0;
  let secondFirst = Math.floor(data.length / 2) - 1;
  let results = [];
  data.forEach((item, i) => {
    if (i % 2) {
      secondFirst += 1;
      results.push({ ...data[secondFirst], id: secondFirst + 1 });
    } else {
      initial += 1;
      results.push({ ...data[initial], id: initial });
    }
  });
  return results;
}

export { mostViewSort };

export const createSingleNewsSlug = (title) => {
  return `/news/${title?.toLocaleLowerCase().replace(/[^A-Z0-9]/gi, "_")}`;
};

export const openInNewTab = (url) => {
  if (typeof window !== "undefined") {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
    window.open("https://www.google.com", "_blank", "noopener,noreferrer");
  }
};

export const handleSingleNewsData = (data) => {
  localStorage.setItem("singleNewsData", JSON.stringify(data));
};

export const gentRandomImageByCategory = (category) => {
  const randomImage =
    imageArr[category][Math.floor(Math.random() * imageArr[category].length)];
  return randomImage;
};
