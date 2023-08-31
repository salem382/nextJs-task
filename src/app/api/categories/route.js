import categoriesData from "../../../../public/Categories.json"
import { NextResponse } from 'next/server';

export async function GET() {
  return  NextResponse.json({categoriesData})
}
//return  Response.json({categoriesData});