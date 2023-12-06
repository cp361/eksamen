const [classrooms, setClassRooms] = useState([]);

  const getClassRooms = async () => {
    const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocG1keGhudnltZ2h3eGpucWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MTA2MzYsImV4cCI6MjAxNjA4NjYzNn0.iSvURo8-6F-ns9QmFtEnuBE0pvQdHw6vf2VaMUAVQz0'
    const data = await fetch('https://thpmdxhnvymghwxjnqko.supabase.co/rest/v1/classrooms', {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      }
    }).then(response => response.json())

    setClassRooms(data);
  }

  useEffect(() => {
    getClassRooms();
  }, []);

  const createReservation = async (reservation) => {

  }