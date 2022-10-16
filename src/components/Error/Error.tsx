import "./error.css"

interface ErrorProps {
  error: string;
}

const Error = ({ error }: ErrorProps) => {
  return <div className="error-box" data-testid="error">❌ {error}</div>;
};

export default Error;
