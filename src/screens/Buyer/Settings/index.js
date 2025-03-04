import React from 'react'

const Settings = () => {
    return (
        <>
            <div className="tw-max-w-4xl tw-mx-auto tw-py-10">
                <h1 className="tw-text-3xl tw-font-bold tw-mb-6">Settings</h1>
                <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6">
                    <div className="tw-flex tw-items-center tw-mb-4">
                        <div className="tw-relative tw-w-16 tw-h-16 tw-rounded-full tw-bg-gray-200 tw-flex tw-items-center tw-justify-center">
                            <span className="tw-text-2xl">👤</span>
                            <button className="tw-absolute tw-bottom-0 tw-right-0 tw-bg-blue-500 tw-text-white tw-rounded-full tw-p-1 tw-border tw-border-white">
                                ✏️
                            </button>
                        </div>
                        <div className="tw-ml-4">
                            <h2 className="tw-text-xl tw-font-semibold">Personal details and preferences</h2>
                            <p className="tw-text-gray-500 tw-text-sm">
                                Manage your details, set your region, and select your language and currency.
                            </p>
                        </div>
                    </div>
                    <div className="tw-border-t tw-pt-4">
                        <div className="tw-flex tw-justify-between tw-items-center tw-py-3">
                            <div>
                                <h3 className="tw-font-semibold">Personal details</h3>
                                <p className="tw-text-gray-500 tw-text-sm">
                                    Country: <span className="tw-font-medium">🇵🇱 Poland</span>
                                </p>
                            </div>
                            <span className="tw-text-gray-400">➝</span>
                        </div>
                        <div className="tw-border-t tw-pt-4 tw-flex tw-justify-between tw-items-center tw-py-3">
                            <div>
                                <h3 className="tw-font-semibold">Regional preferences</h3>
                                <p className="tw-text-gray-500 tw-text-sm">
                                    Region: <span className="tw-font-medium">🌍 Europe</span> &nbsp; Language: <span className="tw-font-medium">English</span> &nbsp; Currency: <span className="tw-font-medium">USD</span>
                                </p>
                            </div>
                            <span className="tw-text-gray-400">➝</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings
