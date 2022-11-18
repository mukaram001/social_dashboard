import React from 'react'
import '../../App.css';

const Modals = () => {
    return (
        <>
            {/* Upload Image Modal */}
            <div className="modal fade" id="uploadimage" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="uploadimageLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="uploadimageLabel">Upload Facebook Insights</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Select Images to Upload</label>
                                        <input className="form-control" type="file" multiple id="formFile" />
                                    </div>
                                </form>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary rounded-pill">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modals