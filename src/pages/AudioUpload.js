import React, { useState } from "react";

const AudioUpload = () => {

    const [file, setFile] = useState(null);
    const [transcricao, setTranscricao] = useState("");

    const handleFileChange = (e) => {

        setFile(e.target.files[0]);
    }

    const handleUpload = (e) => {}

    return (
        <div className="container">
            <h2>Transcritor de Áudio para Texto</h2>

            <div className="file-input">
                <input type="file"
                    accept="audio/*"
                        onChange={handleFileChange}/>
            </div>

            <button className="upload-button"
                onClick={handleUpload}>Enviar e Transcrever
            </button>

            <div className="transcription-result">
                <h2>
                    Resultado da Transcrição
                </h2>
                <p>
                    {transcricao}
                </p>
            </div>
        </div>
    )
}
export default AudioUpload