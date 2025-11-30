import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  Database,
  Home,
  Menu,
  Network,
  SquareFunction,
  StickyNote,
  Table,
  X,
} from 'lucide-react'

export default function Header() {
  return (
    <>
      <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
      
        <h1 className="ml-4 text-xl font-semibold">Woiken</h1>
      </header>
      </>
  )
}
