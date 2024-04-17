import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { fireStore } from "./firebaseClient";

// 파이어베이스 업데이트
export const updateRecipe = async (id: string, recipeLike: number) => {
  const docIdRef = doc(fireStore, "recipe", id);
  const newField = { like: recipeLike };
  await updateDoc(docIdRef, newField);
};

// 파이어베이스 삭제
export const deleteRecipe = async (id: string) => {
  const docIdRef = doc(fireStore, "recipe", id);
  await deleteDoc(docIdRef);
};
