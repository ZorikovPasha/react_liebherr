import YouTube from 'react-youtube'

interface IPopupMessageProps {
  videoId: string
  onClose: () => void
}

export const PopupVideo: React.FC<IPopupMessageProps> = ({ videoId, onClose }) => {
  return (
    <div className="popup">
      <div className="popup__body popup__body--video">
        <button className="popup__close" onClick={onClose}>
          <img src="/static/images/close.svg" alt="close icon" />
        </button>
        <div className="popup__video rel">
          <YouTube
            videoId={videoId}
            opts={{ autoplay: 1, width: '100%', height: '100%' }}
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  )
}
