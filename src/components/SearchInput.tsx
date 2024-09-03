import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");

  const clearSearchText = () => {
    setSearchText("");
    onSearch("");
    ref.current?.focus();
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search movies, series and games..."
          variant="filled"
          value={searchText}
          onChange={(input) => setSearchText(input.target.value)}
        />
        <InputRightElement
          cursor="pointer"
          children={searchText && <BsX />}
          onClick={clearSearchText}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
