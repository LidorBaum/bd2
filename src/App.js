import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div style={{
              position: 'sticky',
              top: "80vh",
              backgroundColor: '#f0f0f0',
              width: '100%',
              height: 320
          }} className={'scroller'}>
              <img className={'scrolitem'}
                   src={require('./assets/1200px-Circle_arrow_down_font_awesome.svg.png')}
                   style={{width: 65, borderRadius: 30}}/>

          </div>
          <div style={{
              height: 650,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -250
          }}>
              <h1>פיו, איזה מזל</h1>
              <h1>חשבתי שכבר לא תמצאי</h1>
              <img
                  src={require('./assets/4da9c59e-42eb-4a0e-a36a-49f705948079.jpeg')}
                  style={{width: 200, borderRadius: 30}}/>

          </div>
          <div style={{height: 250}}>
              <h1>אז בגלל שאת לא יודעת מה את רוצה,</h1>
          </div>
          <div style={{height: 250}}>
              <h1>אני נותן לך לעשות את הבחירה הכי קשה</h1>
          </div>
          <div style={{height: 250}}>
              <h1>בעצם 2,</h1>
          </div>
          <div style={{height: 250}}>
              <h1>תאריך לחופשה,</h1>
          </div>
          <div style={{height: 250}}>
              <h1>ואוטו לנסיעה,</h1>
          </div>
          <div style={{height: 250}}>
              <h1>את מוזמנת להתפרע, ולבחור את הקמפר שבו את רוצה שניסע</h1>
          </div>
          <div style={{height: 250}}>
              <h1>אז תלחצי על התמונה ובואי נתחיל את המסע</h1>
          </div>
          <a href={"https://www.campervaniceland.com/camper-van-rental"}>
          <img src={require('./assets/Screen_Shot_2022-12-30_at_16.36.18-removebg-preview.png')} />
          </a>
          <div style={{height: 500}} />
      </header>
    </div>
  );
}

export default App;
