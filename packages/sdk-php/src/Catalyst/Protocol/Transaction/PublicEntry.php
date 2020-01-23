<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Transaction.proto

namespace Catalyst\Protocol\Transaction;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Protobuf type <code>Catalyst.Protocol.Transaction.PublicEntry</code>
 */
class PublicEntry extends \Google\Protobuf\Internal\Message
{
    /**
     * <pre>
     * Address of receiver.
     * </pre>
     *
     * <code>bytes receiver_address = 1;</code>
     */
    private $receiver_address = '';
    /**
     * <pre>
     * Address of sender.
     * </pre>
     *
     * <code>bytes sender_address = 2;</code>
     */
    private $sender_address = '';
    /**
     * <pre>
     * uint256 amount
     * </pre>
     *
     * <code>bytes amount = 3;</code>
     */
    private $amount = '';
    /**
     * <pre>
     * Smart contract data.
     * </pre>
     *
     * <code>bytes data = 4;</code>
     */
    private $data = '';
    /**
     * <code>.google.protobuf.Timestamp timestamp = 5;</code>
     */
    private $timestamp = null;
    /**
     * <code>bytes gas_price = 6;</code>
     */
    private $gas_price = '';
    /**
     * <code>uint64 gas_limit = 7;</code>
     */
    private $gas_limit = 0;
    /**
     * <pre>
     * 8 bytes, clear text, fees * 10^12
     * </pre>
     *
     * <code>bytes transaction_fees = 8;</code>
     */
    private $transaction_fees = '';
    /**
     * <pre>
     * A nonce, similar to Ethereum, incremented on each transaction on the account issuing the transaction
     * </pre>
     *
     * <code>uint64 nonce = 9;</code>
     */
    private $nonce = 0;
    /**
     * <pre>
     * is the ed25519ph context signature
     * </pre>
     *
     * <code>.Catalyst.Protocol.Cryptography.Signature signature = 10;</code>
     */
    private $signature = null;

    public function __construct() {
        \GPBMetadata\Transaction::initOnce();
        parent::__construct();
    }

    /**
     * <pre>
     * Address of receiver.
     * </pre>
     *
     * <code>bytes receiver_address = 1;</code>
     */
    public function getReceiverAddress()
    {
        return $this->receiver_address;
    }

    /**
     * <pre>
     * Address of receiver.
     * </pre>
     *
     * <code>bytes receiver_address = 1;</code>
     */
    public function setReceiverAddress($var)
    {
        GPBUtil::checkString($var, False);
        $this->receiver_address = $var;
    }

    /**
     * <pre>
     * Address of sender.
     * </pre>
     *
     * <code>bytes sender_address = 2;</code>
     */
    public function getSenderAddress()
    {
        return $this->sender_address;
    }

    /**
     * <pre>
     * Address of sender.
     * </pre>
     *
     * <code>bytes sender_address = 2;</code>
     */
    public function setSenderAddress($var)
    {
        GPBUtil::checkString($var, False);
        $this->sender_address = $var;
    }

    /**
     * <pre>
     * uint256 amount
     * </pre>
     *
     * <code>bytes amount = 3;</code>
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * <pre>
     * uint256 amount
     * </pre>
     *
     * <code>bytes amount = 3;</code>
     */
    public function setAmount($var)
    {
        GPBUtil::checkString($var, False);
        $this->amount = $var;
    }

    /**
     * <pre>
     * Smart contract data.
     * </pre>
     *
     * <code>bytes data = 4;</code>
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * <pre>
     * Smart contract data.
     * </pre>
     *
     * <code>bytes data = 4;</code>
     */
    public function setData($var)
    {
        GPBUtil::checkString($var, False);
        $this->data = $var;
    }

    /**
     * <code>.google.protobuf.Timestamp timestamp = 5;</code>
     */
    public function getTimestamp()
    {
        return $this->timestamp;
    }

    /**
     * <code>.google.protobuf.Timestamp timestamp = 5;</code>
     */
    public function setTimestamp(&$var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->timestamp = $var;
    }

    /**
     * <code>bytes gas_price = 6;</code>
     */
    public function getGasPrice()
    {
        return $this->gas_price;
    }

    /**
     * <code>bytes gas_price = 6;</code>
     */
    public function setGasPrice($var)
    {
        GPBUtil::checkString($var, False);
        $this->gas_price = $var;
    }

    /**
     * <code>uint64 gas_limit = 7;</code>
     */
    public function getGasLimit()
    {
        return $this->gas_limit;
    }

    /**
     * <code>uint64 gas_limit = 7;</code>
     */
    public function setGasLimit($var)
    {
        GPBUtil::checkUint64($var);
        $this->gas_limit = $var;
    }

    /**
     * <pre>
     * 8 bytes, clear text, fees * 10^12
     * </pre>
     *
     * <code>bytes transaction_fees = 8;</code>
     */
    public function getTransactionFees()
    {
        return $this->transaction_fees;
    }

    /**
     * <pre>
     * 8 bytes, clear text, fees * 10^12
     * </pre>
     *
     * <code>bytes transaction_fees = 8;</code>
     */
    public function setTransactionFees($var)
    {
        GPBUtil::checkString($var, False);
        $this->transaction_fees = $var;
    }

    /**
     * <pre>
     * A nonce, similar to Ethereum, incremented on each transaction on the account issuing the transaction
     * </pre>
     *
     * <code>uint64 nonce = 9;</code>
     */
    public function getNonce()
    {
        return $this->nonce;
    }

    /**
     * <pre>
     * A nonce, similar to Ethereum, incremented on each transaction on the account issuing the transaction
     * </pre>
     *
     * <code>uint64 nonce = 9;</code>
     */
    public function setNonce($var)
    {
        GPBUtil::checkUint64($var);
        $this->nonce = $var;
    }

    /**
     * <pre>
     * is the ed25519ph context signature
     * </pre>
     *
     * <code>.Catalyst.Protocol.Cryptography.Signature signature = 10;</code>
     */
    public function getSignature()
    {
        return $this->signature;
    }

    /**
     * <pre>
     * is the ed25519ph context signature
     * </pre>
     *
     * <code>.Catalyst.Protocol.Cryptography.Signature signature = 10;</code>
     */
    public function setSignature(&$var)
    {
        GPBUtil::checkMessage($var, \Catalyst\Protocol\Cryptography\Signature::class);
        $this->signature = $var;
    }

}
