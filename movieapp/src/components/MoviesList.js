import MovieCard from "./MovieCard";

function MoviesList({movies}) {
  return(
   <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",width:"80%",margin:"auto"}}>
    
 {movies.map((movie,i) => (
      <MovieCard movie={movie} key={i}/>
 ))}
  </div>
   );
}
export default MoviesList;