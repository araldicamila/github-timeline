import { useEffect, useRef, useCallback } from "react";
import { ContainerSearchUser, WrapperInput } from "./styles";

export const SearchUser = ({
  error,
  onClickSearch,
  user,
  setUser,
  setError,
}) => {
  const spanRef = useRef();
  let i = 0;
  const text = "Welcome! Let's see your github timeline!";
  const speed = 50;

  const typeWriter = useCallback(() => {
    if (i < text.length) {
      spanRef.current.innerHTML += text.charAt(i);
      i++;

      setTimeout(typeWriter, speed);
    }
  }, [i]);

  useEffect(() => {
    if (spanRef && spanRef.current) {
      typeWriter();
    }
  }, [typeWriter]);

  return (
    <ContainerSearchUser>
      <span ref={spanRef}></span>
      <label>Username</label>
      <WrapperInput>
        <span>
          →
          <input
            onChange={(e) => setUser(e.target.value)}
            value={user}
            autoFocus
            aria-label="input-username"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                onClickSearch();
              }

              if (error) {
                setError(false);
              }
            }}
          />
        </span>

        <button onClick={onClickSearch}>Search</button>
      </WrapperInput>

      {error ? <p>This username doesn't exists 😥</p> : null}
    </ContainerSearchUser>
  );
};
