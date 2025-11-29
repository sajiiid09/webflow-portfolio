import dynamic from "next/dynamic";

const BlogSliderClient = dynamic(() => import("./BlogSliderClient").then((mod) => mod.BlogSliderClient), {
  ssr: false,
});

export function BlogSlider() {
  return <BlogSliderClient />;
}
