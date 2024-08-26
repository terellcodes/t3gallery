import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/7fd327b4-136c-455a-a307-8abb342458f5-ck0269.jpeg",
  "https://utfs.io/f/b1973321-6f60-4ba8-9861-297b812295f6-h5b1rx.jpeg",
  "https://utfs.io/f/f327d455-6383-47f7-a5cc-33ae757559ea-rg1m3v.jpeg",
  "https://utfs.io/f/b36b4877-4eba-45bb-8df6-83da3053f0f9-o6hw91.jpeg",
]

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold">Hello (gallery in progress)</h1>
    </main>
  );
}