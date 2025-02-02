'use client';
import { useState, useEffect} from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu,DropdownMenuTrigger,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuContent,DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import {SunIcon,MoonIcon,SunMoon} from 'lucide-react';

import { useTheme } from "next-themes";


const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
  
  return ( <DropdownMenu>
    <DropdownMenuTrigger asChild>
  <Button variant="ghost">
  {
    theme ==='system' ? (
      <SunMoon size={24} />
    ) : theme === 'light' ? (
      <SunIcon size={24} />
    ) : (
      <MoonIcon size={24} />
    )
  }

  </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Mode</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
        checked={theme === 'system'}
        onClick={() => setTheme('system')}
      >
        System
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={theme === 'light'}
        onClick={() => setTheme('light')}
      >
        Light
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={theme === 'dark'}
        onClick={() => setTheme('dark')}
      >
        Dark
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
      
  </DropdownMenu> );
}
 
export default ModeToggle;