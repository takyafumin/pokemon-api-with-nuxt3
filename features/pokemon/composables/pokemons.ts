/**
 * Pokemon Type
 */
type Pokemon = {
  name: string
  url: string
}

type ApiResponse = {
  results: Array<Pokemon>
}

/**
 * Fetch Pokemon API
 */
export const useFetchPokemons = async () => {
  const runtimeConfig = useRuntimeConfig()
  const { data, status, error } = await useFetch<ApiResponse>(runtimeConfig.public.apiUrl)
  if (error.value) {
    console.error(error.value)
  }

  return {
    pokemons: data.value?.results ?? [],
    status,
    error: error.value,
  }
}
