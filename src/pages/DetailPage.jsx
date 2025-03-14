import VacationDetail from '../components/VacationDetail';

function DetailPage({ vacations }) {
  return (
    <div className="detail-page">
      <VacationDetail vacations={vacations} />
    </div>
  );
}

export default DetailPage;
