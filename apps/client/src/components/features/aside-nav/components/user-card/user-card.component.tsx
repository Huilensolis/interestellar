'use client'

import { DropDown } from '@/components/features/drop-down'
import { Icon } from '@/components/ui/icon'
import {
  Bolt,
  ChevronsUpDown,
  CircleUser,
  ListTodo,
  LogOut,
  type LucideIcon,
} from 'lucide-react'
import { NavLink } from '../nav-link'
import { Hr } from '@/components/ui/hr'
import { PlainButton } from '@/components/ui/button/plain'

export function UserCard() {
  const USER_LINKS: Array<{ title: string; icon: LucideIcon; href: string }> = [
    {
      title: 'Profile',
      href: 'profile',
      icon: CircleUser,
    },
    {
      title: 'Configuration',
      href: 'conf',
      icon: Bolt,
    },
    {
      title: 'Tasks assigned to me',
      href: 'my tasks',
      icon: ListTodo,
    },
  ]

  return (
    <div className="relative w-full">
      <DropDown.Provider>
        <DropDown.ToggleBtn
          closeOnBlur
          className="w-full flex items-center justify-between hover:bg-gray-200 transition-colors duration-75 py-1 px-1 rounded-md z-10"
        >
          <article className="flex gap-2 items-center">
            <img
              src="https://avatar.vercel.sh/slug"
              alt="alt"
              className="w-12 h-full object-cover object-center rounded-full"
            />
            <section className="h-full flex flex-col justify-center items-start">
              <h2 className="text-neutral-700 text-lg font-semibold leading-5">
                Huilen Solis
              </h2>
              <span className="text-neutral-500 leading-5">@huilensolis</span>
            </section>
          </article>
          <Icon icon={ChevronsUpDown} />
          <DropDown.DropeableZone className="flex flex-col gap-2 p-1 absolute bottom-full mb-2 left-0 w-full z-0 rounded-lg shadow-lg shadow-neutral-300 bg-gray-100 border border-neutral-200">
            {USER_LINKS.map((item, i) => (
              <li key={i}>
                <NavLink href={item.href}>
                  <Icon icon={item.icon} />
                  {item.title}
                </NavLink>
              </li>
            ))}
            <Hr style="horizontal" />
            <PlainButton className="flex items-center justify-start gap-2 p-1">
              <Icon icon={LogOut} /> Log Out
            </PlainButton>
          </DropDown.DropeableZone>
        </DropDown.ToggleBtn>
      </DropDown.Provider>
    </div>
  )
}
