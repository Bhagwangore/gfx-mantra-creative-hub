import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const MOCKAPI_URL = process.env.REACT_APP_MOCKAPI_URL;

const categories = [
  { id: "all", label: "All" },
  { id: "social-media", label: "Social Media" },
  { id: "printing", label: "Printing" },
  { id: "web-design", label: "Web Design" },
  { id: "video-editing", label: "Video Editing" },
];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [currentTab, setCurrentTab] = useState("all");
  const [previewMedia, setPreviewMedia] = useState(null)

  useEffect(() => {
    axios.get(MOCKAPI_URL).then((res) => setProjects(res.data));
  }, []);

  const handleDownloadPortfolio = () => {
    alert("This would download the PDF portfolio in a real implementation");
  };

  const handlePreview = (mediaUrl) => {
    setPreviewMedia(mediaUrl);
  };

  const handleClosePreview = () => {
    setPreviewMedia(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">Explore Our Creative Projects and Success Stories</p>
        </div>

        <Tabs defaultValue="all" value={currentTab} onValueChange={setCurrentTab} className="w-full mb-10">
          <div className="flex justify-center mb-8">
            <TabsList className="glass">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-6">
                {projects
                  .filter(
                    (item) =>
                      category.id === "all" || item.category === category.id
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="break-inside-avoid rounded-xl overflow-hidden shadow-lg p-3"
                      onClick={()=> handlePreview(item.mediaUrl)}
                    >
                    {item.mediaUrl && (item.mediaUrl.endsWith(".mp4") || item.mediaUrl.endsWith(".mov")) ? (
                      <video
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                        loop
                        className="w-full"
                      >
                        <source src={item.mediaUrl} type="video/mp4" />
                      </video>
                    ) : (
                          <img
                            src={item.mediaUrl}
                            alt={item.title}
                            className="w-full h-auto object-cover"
                          />
                    )}
                    </div>
                  ))}
                  {previewMedia && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
                      <div className="h-[500px] relative top-4">
                        <button onClick={handleClosePreview} className="absolute top-0 -right-8 bg-white p-2 rounded-full cursor-pointer">✖</button>
                        {previewMedia.endsWith(".mp4") ? (
                          <video controls autoPlay className="max-h-full"> <source src={previewMedia} type="video/mp4" /></video>
                        ) : (
                          <img src={previewMedia} alt="Preview" className="max-w-full max-h-full" />
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Button variant="outline" size="lg" onClick={() => window.open("/portfolio", "_blank")}>
            View More
          </Button>
          <Button size="lg" className="btn-gradient" onClick={handleDownloadPortfolio}>
            <Download className="mr-2 h-4 w-4" /> Download Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;