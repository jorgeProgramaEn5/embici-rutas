import Link from "next/link";
import {getCoverImage, getGames } from "../services/games"

// async function getGames () {
//     const res = await fetch(`${API_URL}/video-games?populate=*`)
//     if (!res.ok) {
//         throw new Error('upss something went wrong')
//     }
//     const { data } = await res.json()
//     return data
// }

export default async function gamePage() {

    const games = await getGames();
    console.log(games)

    return (
        <section className="flex flex-col items-center justify-between min-h-screen p-24">
            <div>
                <div>
                    {
                        games.map(({attributes, id}) => (
                            
                            <Link key={id} href="#" className="flex flex-col items-center bg-gray-light border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mb-2">
                                <img className="object-cover w-full rounded-t-lg h-[200px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={getCoverImage({attributes})} alt=""/>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{attributes.title}</h5>
                                    <p className="mb-3 font-normal text-gray-700 ">{attributes.description}</p>
                                </div>
                            </Link>

                        ))
                    }
                </div>
            </div>
        </section>
    )
}