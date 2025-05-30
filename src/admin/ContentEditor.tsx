import { useState, useEffect } from 'react';
import { SaveIcon as Save, LoaderIcon as Loader } from '../components/Icons';

interface ContentSection {
  id: string;
  title: string;
  content: string;
}

export default function ContentEditor() {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Simulate loading content from API or JSON file
  useEffect(() => {
    // In a real app, this would be an API call to fetch content
    setTimeout(() => {
      setSections([
        {
          id: 'hero',
          title: 'Hero Section',
          content: 'Web developer specializing in creating beautiful and functional websites.'
        },
        {
          id: 'about',
          title: 'About Section',
          content: 'With over 5 years of experience, I help businesses transform their digital presence.'
        },
        {
          id: 'services',
          title: 'Services Section',
          content: 'I offer web development, UI/UX design, and SEO optimization services.'
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const handleSave = () => {
    setSaving(true);
    // Simulate API call to save content
    setTimeout(() => {
      setSaving(false);
      setSaveSuccess(true);
      // Reset success message after a delay
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };

  const handleContentChange = (id: string, newContent: string) => {
    setSections(prevSections => 
      prevSections.map(section => 
        section.id === id ? { ...section, content: newContent } : section
      )
    );
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader className="animate-spin text-orange-500" size={32} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Content Editor</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Edit your website content</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <button 
            onClick={handleSave}
            disabled={saving}
            className={`
              px-4 py-2 rounded-lg transition shadow-md flex items-center
              ${saving ? 
                'bg-gray-400 cursor-not-allowed' : 
                'bg-orange-500 hover:bg-orange-600 text-white'
              }
            `}
          >
            {saving ? (
              <>
                <Loader size={16} className="animate-spin mr-2" />
                Saving...
              </>
            ) : (
              <>
                <Save size={16} className="mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>
      
      {/* Success message */}
      {saveSuccess && (
        <div className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-400 p-4 rounded-lg border border-green-200 dark:border-green-800">
          Content saved successfully!
        </div>
      )}
      
      {/* Content sections */}
      <div className="space-y-6">
        {sections.map(section => (
          <div 
            key={section.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-3">{section.title}</h2>
            
            <textarea
              value={section.content}
              onChange={(e) => handleContentChange(section.id, e.target.value)}
              rows={4}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Last updated: May 12, 2023
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}