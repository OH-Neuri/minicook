interface IngredientsMenu {
  id: number;
  category: string;
  ingredients: string[];
}

const ingredientsMenu: IngredientsMenu[] = [
  {
    id: 0,
    category: "채소류",
    ingredients: [
      "대파",
      "양파",
      "마늘",
      "배추",
      "청양고추",
      "느타리버섯",
      "애호박",
      "당근",
      "가지",
      "부추",
      "양배추",
      "상추",
      "시금치",
      "무",
      "우엉",
      "오이",
      "피망",
      "브로콜리",
    ],
  },
  {
    id: 1,
    category: "과일류",
    ingredients: [
      "매실",
      "배",
      "사과",
      "복숭아",
      "자두",
      "대추",
      "포도",
      "파인애플",
      "딸기",
      "밤",
      "은행",
    ],
  },
  {
    id: 2,
    category: "육류",
    ingredients: ["닭", "쇠고기", "돼지고기", "차돌박이", "삼겹살", "목살"],
  },
  {
    id: 3,
    category: "우유 및 유제품",
    ingredients: ["우유", "산양유", "분유", "버터", "치즈", "요구르트"],
  },
  {
    id: 4,
    category: "어류 및 패류",
    ingredients: [
      "고등어",
      "새우",
      "오징어",
      "홍합",
      "게맛살",
      "굴",
      "게",
      "조개",
      "전복",
    ],
  },
  {
    id: 5,
    category: "기타",
    ingredients: [
      "간장",
      "소금",
      "물",
      "후추",
      "미향",
      "참기름",
      "카놀라유",
      "찹쌀가루",
      "아이올리소스",
      "케찹",
      "돈까스소스",
      "딸기잼",
    ],
  },
];

export default ingredientsMenu;
