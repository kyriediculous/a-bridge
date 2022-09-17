// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract AERC20 {
    /**
     * @notice Transfer gets emitted when TenderTokens are transferred.
     * @param from the account that tokens are transferred from
     * @param to the account that tokens are transferred to
     * @param amount the amount of tokens transferred
     */
    event Transfer(address indexed from, address indexed to, uint256 amount);

    /**
     * @notice Approve gets emitted when TenderTokens are approved for spending.
     * @param owner the account tokens are approved from
     * @param spender the account tokens are approved to
     * @param amount the amount of tokens approved
     */
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 amount
    );

    struct Token {
        string symbol;
        string name;
        uint8 decimals;
    }

    Token internal token;

    /**
     * @dev Total supply of token
     * @dev Controlled by Tenderizer
     * @notice Total amount of tokens staked
     */
    uint256 public totalSupply;

    /**
     * @dev Total amount of outstanding shares
     */
    uint256 public totalShares;

    /**
     * @dev Shares of all accounts.
     * @dev tokens = shares * totalSupply / totalShares;
     */
    mapping(address => uint256) public shares;

    /**
     * @dev Allowances nominated in tokens, not token shares.
     */
    mapping(address => mapping(address => uint256)) public allowance;

    /**
     * @param _account Account whose balance is requested.
     * @dev Returns the amount of tokens (amount represented by shares) owned by `_account`.
     */
    function balanceOf(address _account) external view returns (uint256) {
        return _sharesToTokens(shares[_account]);
    }

    /**
     * @param _spender account to approve tokens for spending.
     * @param _amount token ammount to approve for spending.
     * @return success boolean value indicating whether the operation succeeded.
     * @dev Sets `_amount` as the allowance of `_spender` over the caller's tokens.
     * @dev Emits an `Approval` event.
     */
    function approve(address _spender, uint256 _amount) public returns (bool) {
        _approve(msg.sender, _spender, _amount);
    }

    /**
     * @param _spender account to increase token allowance for spending.
     * @param _addedValue token ammount to add to existing allowance.
     * @return success boolean value indicating whether the operation succeeded.
     * @dev Increases allowance by `_amount` for `spender` over the caller's tokens.
     */
    function increaseAllowance(address _spender, uint256 _addedValue)
        public
        returns (bool)
    {
        allowance[msg.sender][_spender] += _addedValue;
        return true;
    }

    /**
     * @param _spender account to increase token allowance for spending.
     * @param _subtractedValue token ammount to subtract from existing allowance.
     * @return success boolean value indicating whether the operation succeeded.
     * @dev Reduces allowance by `_amount` for `spender` over the caller's tokens.
     */
    function decreaseAllowance(address _spender, uint256 _subtractedValue)
        public
        returns (bool)
    {
        allowance[msg.sender][_spender] -= _subtractedValue;
        return true;
    }

    /**
     * @notice Transfers `_amount` tokens from the caller's account to the `_to` account.
     * @param _to address of the recipient
     * @param _amount amount of tokens to transfer
     * @return success a boolean value indicating whether the operation succeeded.
     * @dev Emits a `Transfer` event.
     * @dev The `_amount` argument is the amount of tokens, not shares.
     */
    function transfer(address _to, uint256 _amount)
        public
        virtual
        returns (bool success)
    {
        success = _transferShares(msg.sender, _to, _tokensToShares(_amount));
        emit Transfer(msg.sender, _to, _amount);
    }

    /**
     * @notice Transfers `_amount` tokens from `_from` to `_to` using the
     * allowance mechanism. `_amount` is then deducted from the caller's allowance.
     * @param _from address of the account to transfer tokens from
     * @param _to address of the recipient
     * @return success a boolean value indicating whether the operation succeeded.
     * @dev Emits a `Transfer` event.
     * @dev Reduces allowance bt `_amount`
     * @dev The `_amount` argument is the amount of tokens, not shares.
     */
    function transferFrom(
        address _from,
        address _to,
        uint256 _amount
    ) public returns (bool success) {
        // Underflow if not enough allowance
        allowance[_from][msg.sender] -= _amount;
        success = _transferShares(_from, _to, _tokensToShares(_amount));
        emit Transfer(_from, _to, _amount);
    }

    // Internal functions

    function _approve(
        address _owner,
        address _spender,
        uint256 _amount
    ) internal returns (bool) {
        allowance[_owner][_spender] = _amount;
        emit Approval(msg.sender, _spender, _amount);
        return true;
    }

    /**
     * @dev Moves `_shares` shares from `_from` to `_to`.
     * @dev `_from` must hold at least `_shares` shares.
     * @return success a boolean value indicating whether the operation succeeded.
     */
    function _transferShares(
        address _from,
        address _to,
        uint256 _shares
    ) private returns (bool) {
        shares[_from] -= _shares;
        // unchecked as bound by totalShares hence cannot overflow
        unchecked {
            shares[_to] += _shares;
        }
        return true;
    }

    /**
     * @dev Creates `_sharesToMint` shares and assigns them to `_account`, increasing the total amount of shares.
     * @dev This doesn't increase the token total supply.
     */
    function _mintShares(address _account, uint256 _sharesToMint) internal {
        totalShares += _sharesToMint;
        unchecked {
            shares[_account] += _sharesToMint;
        }
    }

    /**
     * @dev Destroys `_sharesToBurn` shares from `_account`'s holdings, decreasing the total amount of shares.
     * @dev This doesn't decrease the token total supply.
     * @dev `_account` must hold at least `_sharesToBurn` shares.
     */
    function _burnShares(address _account, uint256 _sharesToBurn) internal {
        // Underflow if not enough shares to burn
        shares[_account] -= _sharesToBurn;
        unchecked {
            totalShares -= _sharesToBurn;
        }
    }

    function _sharesToTokens(uint256 _shares) internal view returns (uint256) {
        uint256 _totalShares = totalShares;
        if (_totalShares == 0) return 0;
        return (_shares * totalSupply) / _totalShares;
    }

    function _tokensToShares(uint256 _tokens) internal view returns (uint256) {
        uint256 _totalSupply = totalSupply;
        uint256 _totalShares = totalShares;
        if (_totalShares == 0) return _tokens;
        if (_totalSupply == 0) return 0;
        return (_tokens * _totalShares) / _totalSupply;
    }
}
