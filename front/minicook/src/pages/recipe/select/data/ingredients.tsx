export interface SelectedIngredients {
  name: string;
  category: number;
}

export interface IngredientsMenuType {
  id: number;
  category: string;
  ingredients: IngredientType[];
}
export interface IngredientType {
  name: string;
  checked: boolean;
}

const ingredientsMenu: IngredientsMenuType[] = [
  {
    id: 0,
    category: "채소류",
    ingredients: [
      { name: "대파", checked: false },
      { name: "양파", checked: false },
      { name: "마늘", checked: false },
      { name: "배추", checked: false },
      { name: "청양고추", checked: false },
      { name: "느타리버섯", checked: false },
      { name: "애호박", checked: false },
      { name: "당근", checked: false },
      { name: "가지", checked: false },
      { name: "부추", checked: false },
      { name: "양배추", checked: false },
      { name: "상추", checked: false },
      { name: "시금치", checked: false },
      { name: "무", checked: false },
      { name: "우엉", checked: false },
      { name: "오이", checked: false },
      { name: "피망", checked: false },
      { name: "브로콜리", checked: false },
    ],
  },
  {
    id: 1,
    category: "과일류",
    ingredients: [
      { name: "매실", checked: false },
      { name: "배", checked: false },
      { name: "사과", checked: false },
      { name: "복숭아", checked: false },
      { name: "자두", checked: false },
      { name: "대추", checked: false },
      { name: "포도", checked: false },
      { name: "파인애플", checked: false },
      { name: "딸기", checked: false },
      { name: "밤", checked: false },
      { name: "은행", checked: false },
    ],
  },
  {
    id: 2,
    category: "육류",
    ingredients: [
      { name: "닭", checked: false },
      { name: "쇠고기", checked: false },
      { name: "돼지고기", checked: false },
      { name: "차돌박이", checked: false },
      { name: "삼겹살", checked: false },
      { name: "목살", checked: false },
    ],
  },
  {
    id: 3,
    category: "우유 및 유제품",
    ingredients: [
      { name: "우유", checked: false },
      { name: "산양유", checked: false },
      { name: "분유", checked: false },
      { name: "버터", checked: false },
      { name: "치즈", checked: false },
      { name: "요구르트", checked: false },
    ],
  },
  {
    id: 4,
    category: "어류 및 패류",
    ingredients: [
      { name: "고등어", checked: false },
      { name: "새우", checked: false },
      { name: "오징어", checked: false },
      { name: "홍합", checked: false },
      { name: "게맛살", checked: false },
      { name: "굴", checked: false },
      { name: "게", checked: false },
      { name: "조개", checked: false },
      { name: "전복", checked: false },
    ],
  },
  {
    id: 5,
    category: "기타",
    ingredients: [
      { name: "간장", checked: false },
      { name: "소금", checked: false },
      { name: "물", checked: false },
      { name: "후추", checked: false },
      { name: "미향", checked: false },
      { name: "참기름", checked: false },
      { name: "카놀라유", checked: false },
      { name: "찹쌀가루", checked: false },
      { name: "아이올리소스", checked: false },
      { name: "케찹", checked: false },
      { name: "돈까스소스", checked: false },
      { name: "딸기잼", checked: false },
    ],
  },
];

export default ingredientsMenu;
