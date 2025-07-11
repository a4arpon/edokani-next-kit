"use client"

import { UserNavbar } from "#/components/shared/UserNavbar"

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UserNavbar />
      <div className="container mx-auto my-5 space-y-10 px-1.5 lg:px-0">
        {children}
      </div>
    </>
  )
}

export default UserLayout
