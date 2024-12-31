import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Presentation, Video, Users, Layout } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">PreziConcept</h1>
          <div className="space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Templates</Button>
            <Button variant="ghost">Resources</Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-5xl font-bold mb-8">Presentations that move audiences</h2>
        <p className="text-xl text-gray-600 mb-10">Create stunning presentations with our intuitive design tools</p>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-6">Start Creating</Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6">
            <CardHeader>
              <Presentation className="w-12 h-12 text-blue-500 mb-6" />
              <CardTitle className="text-xl mb-3">Beautiful Presentations</CardTitle>
              <CardDescription>Create engaging presentations that captivate your audience</CardDescription>
            </CardHeader>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <Video className="w-12 h-12 text-blue-500 mb-6" />
              <CardTitle className="text-xl mb-3">Video Integration</CardTitle>
              <CardDescription>Seamlessly integrate video content into your presentations</CardDescription>
            </CardHeader>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <Users className="w-12 h-12 text-blue-500 mb-6" />
              <CardTitle className="text-xl mb-3">Team Collaboration</CardTitle>
              <CardDescription>Work together with your team in real-time</CardDescription>
            </CardHeader>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <Layout className="w-12 h-12 text-blue-500 mb-6" />
              <CardTitle className="text-xl mb-3">Professional Templates</CardTitle>
              <CardDescription>Choose from hundreds of professionally designed templates</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer with Credits */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p className="text-sm">
            Designed and developed by <span className="font-semibold">Agis Rakhmat Gumelar</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
