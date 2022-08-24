import { collection, doc, deleteDoc, onSnapshot, getDoc, getDocs, updateDoc, query, setDoc } from 'firebase/firestore'

import { firestore } from '../services/firebase'

type Position = {
  x: number,
  y: number
}

export class DotRepository {
  async onSnapshot(x: number, y: number, onChange: (a: any) => void) {
    const unsub = onSnapshot(doc(firestore, "dots", "dot"), (doc) => {
      onChange(doc.data())
    });
  }

  async get(): Promise<Position> {
    const docData = await getDoc(doc(firestore, "dots", "dot"))
    const data = docData.data()
    return data as Position
  }

  async update(x: number, y: number): Promise<boolean> {
    await updateDoc(doc(firestore, "dots", "dot"), {x: x, y: y})
    return true
  }
}

export const dotRepository = new DotRepository()