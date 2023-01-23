import { collection, getDocs } from "firebase/firestore";

const CATEGORY_COLLECTION = 'categories';

export const getAllCategories = (db) => {
    const collectionRef = collection(db, CATEGORY_COLLECTION);
    return getDocs(collectionRef)
        .then((dataFB) => {
            const categories = [];
            dataFB?.docs?.forEach((item) => {
                categories.push({
                    id: item.id,
                    ...item.data()
                })
            })
            return categories;
        })
        .catch((error) => {
            return error;
        })
}