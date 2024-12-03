"use server"
import { FormProps } from "@/app/add-new/page";
import { db } from "@/lib/db";


export async function CreateCatgory(data:FormProps) {
    console.log(data)
    try {
        const newCategory= await db.category.create({
            //@ts-ignore
            data
        })
        console.log(newCategory)
        return newCategory
    } catch (error) {
        console.log(data)
    }
}

export async function GetallCateries() {
    try {
        const allCategories= db.category.findMany()
        return allCategories
    } catch (error) {
        console.log(error)
    }
}