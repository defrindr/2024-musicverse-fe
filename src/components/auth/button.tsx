type AuthButtonProps = {
  loading?: boolean;
  text: string;
};

export default function AuthButton({ text, loading = false }: AuthButtonProps) {
  return (
    <button className="btn-login" disabled={loading}>
      <span
        className={
          "material-icons text-white " + (loading ? "animate-spin" : "")
        }
      >
        {loading ? "autorenew" : "login"}
      </span>
      <span>{text}</span>
    </button>
  );
}
