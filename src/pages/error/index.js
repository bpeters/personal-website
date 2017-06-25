import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import Link from '../../components/Link';
import s from './styles.css';

class ErrorPage extends React.Component {

  static propTypes = {
    error: PropTypes.shape({
      status: PropTypes.number,
      message: PropTypes.string,
    }),
  };

  componentDidMount() {
    document.title = this.props.error && this.props.error.status === 404 ?
      'Page Not Found' : 'Error';
  }

  goBack = event => {
    event.preventDefault();
    history.goBack();
  };

  render() {
    if (this.props.error) console.error(this.props.error); // eslint-disable-line no-console

    const [code, title, message] = this.props.error && this.props.error.status === 404 ?
      ['404', 'Page not found', "The page you're looking for does not exist or an another error occurred."] :
      ['Error', 'Oops, something went wrong', ''];

    return (
      <div className={s.container}>
        <main className={s.content}>
          <h1 className={s.code}>{code}</h1>
          <p className={s.title}>{title}</p>
          <p className={s.text}>{message}</p>
          <p className={s.text}>
            <a href="/" onClick={this.goBack}>Go back</a>, or head over to the&nbsp;
            <Link to="/">home page</Link> to choose a new direction.
          </p>
        </main>
      </div>
    );
  }

}

export default ErrorPage;
