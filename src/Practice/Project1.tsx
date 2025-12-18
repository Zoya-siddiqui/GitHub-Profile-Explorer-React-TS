import React, { useState } from 'react'
import axios from 'axios'
import { 
  Search, 
  User, 
  BookOpen, 
  Users, 
  MapPin, 
  Link as LinkIcon, 
  Twitter, 
  Building,
  Calendar,
  Loader2
} from 'lucide-react'

type GitHubUser = {
  login: string
  avatar_url: string
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
  location: string | null
  blog: string | null
  twitter_username: string | null
  company: string | null
  created_at: string
  html_url: string
}

const Project1 = () => {
  const [userName, setUserName] = useState<string>('')
  const [data, setData] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleFetchData = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userName.trim()) return
    
    try {
      setLoading(true)
      setError('')
      
      const response = await axios.get(`https://api.github.com/users/${userName}`)
      
      if (response?.data) {
        setData(response.data)
      }
    } catch (error: any) {
      setError(error.response?.status === 404 
        ? 'User not found. Please check the username.' 
        : 'Something went wrong. Please try again.')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GitHub Profile Explorer
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Search for any GitHub user and view their profile information, stats, and repositories
          </p>
        </div>

        <form onSubmit={handleFetchData} className="max-w-2xl mx-auto mb-12">
          <div className="relative flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter GitHub username (e.g., Zoya-siddiqui)"
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !userName.trim()}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center whitespace-nowrap"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </>
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <p className="text-red-300 text-center">{error}</p>
          </div>
        )}

        {loading && (
          <div className="max-w-2xl mx-auto text-center py-12">
            <Loader2 className="h-12 w-12 text-white animate-spin mx-auto mb-4" />
            <p className="text-gray-300">Fetching profile data...</p>
          </div>
        )}

        {data && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="sticky top-8">
                      <div className="mb-8">
                        <img 
                          src={data.avatar_url} 
                          alt={data.name || data.login}
                          className="w-48 h-48 md:w-64 md:h-64 rounded-2xl border-4 border-white/20 mx-auto md:mx-0"
                        />
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h1 className="text-3xl font-bold text-white mb-2">
                            {data.name || data.login}
                          </h1>
                          <p className="text-gray-300 text-lg">@{data.login}</p>
                        </div>
                        
                        {data.bio && (
                          <p className="text-gray-300 text-lg leading-relaxed">
                            {data.bio}
                          </p>
                        )}
                        
                        <div className="space-y-4">
                          <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                          >
                            View GitHub Profile
                          </a>
                          
                          {data.blog && (
                            <a
                              href={data.blog.startsWith('http') ? data.blog : `https://${data.blog}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors p-3 bg-white/5 rounded-xl"
                            >
                              <LinkIcon className="h-5 w-5" />
                              <span className="truncate">{data.blog}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-500/20 rounded-xl">
                            <BookOpen className="h-6 w-6 text-blue-300" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Public Repos</p>
                            <p className="text-3xl font-bold text-white">{data.public_repos}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-purple-500/20 rounded-xl">
                            <Users className="h-6 w-6 text-purple-300" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Followers</p>
                            <p className="text-3xl font-bold text-white">{data.followers}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-green-500/20 rounded-xl">
                            <User className="h-6 w-6 text-green-300" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Following</p>
                            <p className="text-3xl font-bold text-white">{data.following}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.company && (
                          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                            <Building className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="text-gray-400 text-sm">Company</p>
                              <p className="text-white">{data.company}</p>
                            </div>
                          </div>
                        )}
                        
                        {data.location && (
                          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                            <MapPin className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="text-gray-400 text-sm">Location</p>
                              <p className="text-white">{data.location}</p>
                            </div>
                          </div>
                        )}
                        
                        {data.twitter_username && (
                          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                            <Twitter className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="text-gray-400 text-sm">Twitter</p>
                              <a
                                href={`https://twitter.com/${data.twitter_username}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300"
                              >
                                @{data.twitter_username}
                              </a>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                          <Calendar className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-gray-400 text-sm">Joined GitHub</p>
                            <p className="text-white">{formatDate(data.created_at)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl">
                      <p className="text-gray-300 text-center">
                        Explore more repositories and contributions on their GitHub profile
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  setData(null)
                  setUserName('')
                  setError('')
                }}
                className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors"
              >
                Search Another User
              </button>
            </div>
          </div>
        )}
      </div>
      
      {!data && !loading && !error && (
        <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
            <div className="p-3 bg-blue-500/20 rounded-xl inline-block mb-4">
              <Search className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Search Users</h3>
            <p className="text-gray-400">Enter any GitHub username to get started</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
            <div className="p-3 bg-purple-500/20 rounded-xl inline-block mb-4">
              <User className="h-8 w-8 text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">View Profile</h3>
            <p className="text-gray-400">See detailed profile information and stats</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
            <div className="p-3 bg-green-500/20 rounded-xl inline-block mb-4">
              <BookOpen className="h-8 w-8 text-green-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Explore Repos</h3>
            <p className="text-gray-400">Access their repositories and contributions</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Project1