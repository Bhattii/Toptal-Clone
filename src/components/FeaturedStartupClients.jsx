import { VideoCard } from "./VideoCard"


export const FeaturedStartupClients = () => {
  return (
    <>
<div className="bg-white p-11 flex justify-center items-center">
<div className="max-w-[1200px] grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<h2 className="text-2xl text-center m-auto">Featured Startup Clients</h2>
<div>{<VideoCard/>}</div>
<div>{<VideoCard/>}</div>
<div>{<VideoCard/>}</div>
<div>{<VideoCard/>}</div>
<div>{<VideoCard/>}</div>
<div>{<VideoCard/>}</div>
<div>{<VideoCard/>}</div>
<div>{<VideoCard/>}</div>

</div>
</div>
    </>
  )
}
