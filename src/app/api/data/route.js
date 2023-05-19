import data from '../../../../data/data.json'
import { NextResponse } from 'next/server'


export async function GET(request) {
    return NextResponse.json(data)
  }