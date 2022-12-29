export const list = (gender, thema) => {
  if (gender === "women") {
    switch (thema) {
      case "ready_to_wear":
        return [
          { kr: "아우터", eng: "outer" },
          { kr: "재킷 및 코트", eng: "jackets_and_coats" },
          { kr: "니트웨어", eng: "knitwear" },
          { kr: "드레스", eng: "dresses" },
          { kr: "셔츠 및 탑", eng: "shirts_and_tops" },
          { kr: "티셔츠 및 스웨트셔츠", eng: "c" },
          { kr: "스커트", eng: "d" },
          { kr: "팬츠 및 반바지", eng: "e" },
          { kr: "데님", eng: "f" },
          { kr: "가족 의류", eng: "g" },
          { kr: "파자마 및 언더웨어", eng: "h" },
        ];
      case "bags":
        return [
          { kr: "숄더백", eng: "shoulder_bags" },
          { kr: "탑 핸들", eng: "top" },
          { kr: "호보백", eng: "ho" },
          { kr: "미니백", eng: "mi" },
          { kr: "백팩 및 벨트백", eng: "backpack_bags" },
          { kr: "브리프케이스", eng: "briefcase" },
        ];
      case "shoes":
        return [
          { kr: "로퍼", eng: "shoulder_bags" },
          { kr: "펌프스 및 발레리나", eng: "top" },
          { kr: "스니커즈", eng: "ho" },
          { kr: "샌들", eng: "mi" },
          { kr: "레이스업", eng: "backpack_bags" },
          { kr: "앵글 부츠 및 부츠", eng: "briefcase" },
        ];
      default:
        return [];
    }
  }
  if (gender === "men") {
    switch (thema) {
      case "ready_to_wear":
        return [
          { kr: "재킷 및 코트", eng: "jackets_and_coats" },
          { kr: "셔츠", eng: "knitwear" },
          { kr: "니트웨어", eng: "dresses" },
          { kr: "셔츠 및 탑", eng: "shirts_and_tops" },
          { kr: "티셔츠 및 폴로 셔츠", eng: "c" },
          { kr: "조깅복 및 스웨트 셔츠", eng: "d" },
          { kr: "팬츠 및 버뮤다", eng: "e" },
          { kr: "데님", eng: "f" },
          { kr: "수트", eng: "g" },
          { kr: "아우터", eng: "h" },
          { kr: "가족 소재", eng: "outer" },
        ];
      case "bags":
        return [
          { kr: "메신저백", eng: "shoulder_bags" },
          { kr: "백팩 및 밸트백", eng: "top" },
          { kr: "토드백", eng: "ho" },
          { kr: "브리프케이스", eng: "mi" },
          { kr: "클리치", eng: "backpack_bags" },
          { kr: "백팩", eng: "briefcase" },
        ];
      case "shoes":
        return [
          { kr: "스니커즈", eng: "shoulder_bags" },
          { kr: "로퍼", eng: "top" },
          { kr: "레이스업", eng: "ho" },
          { kr: "샌들", eng: "mi" },
          { kr: "부츠", eng: "backpack_bags" },
        ];

      default:
        return [];
    }
  }
};

export const themaKorea = (thema) => {
  switch (thema) {
    case "ready_to_wear":
      return "레디 투 웨어";
    case "bags":
      return "백";
    case "shoes":
      return "슈즈";
    case "shoes":
      return "악세사리";
    case "shoes":
      return "라이프 스타일 악세사리";
    case "shoes":
      return "여행";
    default:
      return "";
  }
};
