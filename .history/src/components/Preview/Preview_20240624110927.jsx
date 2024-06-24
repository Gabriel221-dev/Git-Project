import React from "react"

function Preview() {
    return(
        <div className="flex bg-dark-gray p-5 text-white justify-center rounded-md">
            <div className="flex flex-col gap-4">
                <div className=" flex gap-10 item-center">
                    <div>
                        <img className="w-28 rounded-full" src="" alt=""/>
                    </div>
                    <div>
                        <h1>Gabby</h1>
                        <h3 className="text-dark-blue">Gabriel</h3>
                        <p>Joined at 23 june 2024</p>
                    </div>
                    <div>
                        <p className="max-w-xs">
                            user description
                        </p>
                    </div>
                    <div className="flex bg-dark-blue p-4 rounded-md justify-evenly">

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Preview