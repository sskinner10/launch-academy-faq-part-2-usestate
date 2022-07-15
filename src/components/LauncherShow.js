import React, { useState, useEffect} from "react";

const LauncherShow = (props) => {
    const [launcher, setLauncher] = useState({
        id: null,
        name: "",
        bio: ""
    })

    const id = props.match.params.id

    const fetchLauncher = async () => {
        try{
            const response = await fetch(`/api/v1/launchers/${id}`)
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error (errorMessage)
                throw(error)
            }
            const launcherObject = await response.json()
            setLauncher(launcherObject)
        } catch (err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        fetchLauncher()
    }, [])

    return (
        <div>
          <h2>You are viewing Launcher: {launcher.name}</h2>
          <p>{launcher.bio}</p>
        </div>
    )
}

export default LauncherShow