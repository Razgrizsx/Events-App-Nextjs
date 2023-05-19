//import { NextResponse } from 'next/server'
import data from '../../../../data/data.json'
import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

function filePath(){
  return path.join(process.cwd(), 'data', 'data.json')
}

function extract(path){
  const jsondata = fs.readFileSync(path)
  const data = JSON.parse(jsondata)
  return data
}

export async function GET(request) {
  const {searchParams} = new URL(request.url)
  const param = searchParams.get("q")
  return NextResponse.json(request.url)
}

export async function POST(request) {
  
  const filepath = filePath()
  const res = await request.json()
  const {events_categories, allEvents} = extract(filepath)
  
  if(!allEvents){
    return NextResponse.json('Data not found')
  }
 
  const eventFound = allEvents.filter(ev => ev.id == res.id)
  if (eventFound[0].emails_registered.includes(res.email)){ return NextResponse.json('Already registered')}
  
  
  const newAllEvents = allEvents.map((ev) => {
    if(ev.id === res.id){
      return {
        ...ev,
        emails_registered: [ ...ev.emails_registered, res.email],
      }
    }
    return ev
  })
  
  
  
  fs.writeFileSync(filepath, JSON.stringify({events_categories, allEvents: newAllEvents}))
  return NextResponse.json(`You have been registered with the email: ${res.email}`)
}