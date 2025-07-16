import { Navbar } from "#/components/shared/Navbar"

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 space-y-10 px-1.5 lg:px-0">
        {children}
      </div>
    </>
  )
}

export default PublicLayout
