import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const MOCKAPI_URL = import.meta.env.VITE_MOCKAPI_URL;

const categories = [
  { id: "all", label: "All" },
  { id: "social-media", label: "Social Media" },
  { id: "printing", label: "Printing" },
  { id: "web-design", label: "Web Design" },
  { id: "video-editing", label: "Video Editing" },
];

const Portfolio = () => {
  const [projects, setProjects] = useState<Array<any> | null>(null);
  const [currentTab, setCurrentTab] = useState("all");
  const [previewMedia, setPreviewMedia] = useState(null);

  useEffect(() => {
    axios.get(MOCKAPI_URL).then((res) => {
      if (Array.isArray(res.data)) {
        setProjects(res.data);
      }else{
        setProjects([])
      }

    });
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
    <section id="portfolio" className="bg-secondary/50 py-20">
      <div className="container lg:px-8 mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mb-16 mx-auto">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Explore Our Creative Projects and Success Stories
          </p>
        </div>

        <Tabs
          defaultValue="all"
          value={currentTab}
          onValueChange={setCurrentTab}
          className="w-full mb-10"
        >
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
              <div className="columns-1 gap-4 lg:columns-3 sm:columns-2 space-y-6 xl:columns-4">
                {projects &&
                  projects
                    ?.filter((item) => {
                      if (category.id === "all") {
                        return true;
                      }
                      return item.category === category.id;
                    })
                    .map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl shadow-lg break-inside-avoid overflow-hidden"
                        onClick={() => handlePreview(item.mediaUrl)}
                      >
                        {item.mediaUrl &&
                        (item.mediaUrl.endsWith(".mp4") ||
                          item.mediaUrl.endsWith(".mov")) ? (
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
                            className="h-auto w-full object-cover"
                          />
                        )}
                      </div>
                    ))}
                {previewMedia && (
                  <div className="flex bg-black bg-opacity-75 justify-center fixed inset-0 items-center z-50">
                    <div className="h-[500px] relative top-4">
                      <button
                        onClick={handleClosePreview}
                        className="bg-white p-2 rounded-full -right-8 absolute cursor-pointer top-0"
                      >
                        ✖
                      </button>
                      {previewMedia.endsWith(".mp4") ? (
                        <video controls autoPlay className="max-h-full">
                          {" "}
                          <source src={previewMedia} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={previewMedia}
                          alt="Preview"
                          className="max-h-full max-w-full"
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("/portfolio", "_blank")}
          >
            View More
          </Button>
          <Button
            size="lg"
            className="btn-gradient"
            onClick={handleDownloadPortfolio}
          >
            <Download className="h-4 w-4 mr-2" /> Download Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
