const API_KEY: string = "BryanDevApiKey0515";
const headers = {
  headers: new Headers({
    "X-Auth": `${API_KEY}`,
  }),
};

export const fetchPlaylist = async (): Promise<any> => {
  try {
    const response = await fetch(
      "https://apidev.customerology.com/v1/Multimedia/Audio/Playlist/List?limit=100",
      headers
    );
    const data : string[] = await response.json();
    return data;
  } catch (err) {
    if (err) throw err;
  }
};

export const fetchSong = async (playlistId: string | undefined): Promise<any> => {
  try {
    const response = await fetch(
      `https://apidev.customerology.com/v1/Multimedia/Audio/Playlist/${playlistId}`,
      headers
    );
    const data : string[] = await response.json();
    return data;
  } catch (err) {
    if (err) throw err;
  }
};
