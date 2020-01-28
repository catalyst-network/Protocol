<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Transaction.proto

namespace Catalyst\Protocol\Transaction;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 **
 * BulletProof-based range proof. See https://eprint.iacr.org/2017/1066.pdf for references to equations below.
 * Total byte size is (9+2k)*32, where k = log_2(n*m), m is number of aggregates in proof, (2^n)-1 is upper range of values.
 *
 * Generated from protobuf message <code>Catalyst.Protocol.Transaction.RangeProof</code>
 */
class RangeProof extends \Google\Protobuf\Internal\Message
{
    /**
     * m * 32 bytes, value commitment (eq. 36) 
     *
     * Generated from protobuf field <code>repeated bytes value_commitment = 1;</code>
     */
    private $value_commitment;
    /**
     * 32 bytes, bit commitment (eq. 48)
     *
     * Generated from protobuf field <code>bytes bit_commitment = 2;</code>
     */
    private $bit_commitment = '';
    /**
     * 32 bytes, per bit blinding factor commitment (eq. 48)
     *
     * Generated from protobuf field <code>bytes per_bit_blinding_factor_commitment = 3;</code>
     */
    private $per_bit_blinding_factor_commitment = '';
    /**
     * 32 bytes, poly commitment (eq. 54)
     *
     * Generated from protobuf field <code>bytes poly_commitment_t1 = 4;</code>
     */
    private $poly_commitment_t1 = '';
    /**
     * 32 bytes, poly commitment (eq. 54)
     *
     * Generated from protobuf field <code>bytes poly_commitment_t2 = 5;</code>
     */
    private $poly_commitment_t2 = '';
    /**
     * 32 bytes, proof of share (eq. 63)
     *
     * Generated from protobuf field <code>bytes proof_of_share_tau = 6;</code>
     */
    private $proof_of_share_tau = '';
    /**
     * 32 bytes, proof of share (eq. 63)
     *
     * Generated from protobuf field <code>bytes proof_of_share_mu = 7;</code>
     */
    private $proof_of_share_mu = '';
    /**
     * k * 32 bytes, aggregated vector polynomial (eq. 63)
     *
     * Generated from protobuf field <code>repeated bytes aggregated_vector_polynomial_l = 8;</code>
     */
    private $aggregated_vector_polynomial_l;
    /**
     * k * 32 bytes, aggregated vector polynomial (eq. 63)
     *
     * Generated from protobuf field <code>repeated bytes aggregated_vector_polynomial_r = 9;</code>
     */
    private $aggregated_vector_polynomial_r;
    /**
     * 32 bytes (eq. 63)
     *
     * Generated from protobuf field <code>bytes a_prime_0 = 10;</code>
     */
    private $a_prime_0 = '';
    /**
     * 32 bytes (eq. 63)
     *
     * Generated from protobuf field <code>bytes b_prime_0 = 11;</code>
     */
    private $b_prime_0 = '';
    /**
     * Generated from protobuf field <code>bytes t = 12;</code>
     */
    private $t = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $value_commitment
     *           m * 32 bytes, value commitment (eq. 36) 
     *     @type string $bit_commitment
     *           32 bytes, bit commitment (eq. 48)
     *     @type string $per_bit_blinding_factor_commitment
     *           32 bytes, per bit blinding factor commitment (eq. 48)
     *     @type string $poly_commitment_t1
     *           32 bytes, poly commitment (eq. 54)
     *     @type string $poly_commitment_t2
     *           32 bytes, poly commitment (eq. 54)
     *     @type string $proof_of_share_tau
     *           32 bytes, proof of share (eq. 63)
     *     @type string $proof_of_share_mu
     *           32 bytes, proof of share (eq. 63)
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $aggregated_vector_polynomial_l
     *           k * 32 bytes, aggregated vector polynomial (eq. 63)
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $aggregated_vector_polynomial_r
     *           k * 32 bytes, aggregated vector polynomial (eq. 63)
     *     @type string $a_prime_0
     *           32 bytes (eq. 63)
     *     @type string $b_prime_0
     *           32 bytes (eq. 63)
     *     @type string $t
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Transaction::initOnce();
        parent::__construct($data);
    }

    /**
     * m * 32 bytes, value commitment (eq. 36) 
     *
     * Generated from protobuf field <code>repeated bytes value_commitment = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getValueCommitment()
    {
        return $this->value_commitment;
    }

    /**
     * m * 32 bytes, value commitment (eq. 36) 
     *
     * Generated from protobuf field <code>repeated bytes value_commitment = 1;</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setValueCommitment($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::BYTES);
        $this->value_commitment = $arr;

        return $this;
    }

    /**
     * 32 bytes, bit commitment (eq. 48)
     *
     * Generated from protobuf field <code>bytes bit_commitment = 2;</code>
     * @return string
     */
    public function getBitCommitment()
    {
        return $this->bit_commitment;
    }

    /**
     * 32 bytes, bit commitment (eq. 48)
     *
     * Generated from protobuf field <code>bytes bit_commitment = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setBitCommitment($var)
    {
        GPBUtil::checkString($var, False);
        $this->bit_commitment = $var;

        return $this;
    }

    /**
     * 32 bytes, per bit blinding factor commitment (eq. 48)
     *
     * Generated from protobuf field <code>bytes per_bit_blinding_factor_commitment = 3;</code>
     * @return string
     */
    public function getPerBitBlindingFactorCommitment()
    {
        return $this->per_bit_blinding_factor_commitment;
    }

    /**
     * 32 bytes, per bit blinding factor commitment (eq. 48)
     *
     * Generated from protobuf field <code>bytes per_bit_blinding_factor_commitment = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setPerBitBlindingFactorCommitment($var)
    {
        GPBUtil::checkString($var, False);
        $this->per_bit_blinding_factor_commitment = $var;

        return $this;
    }

    /**
     * 32 bytes, poly commitment (eq. 54)
     *
     * Generated from protobuf field <code>bytes poly_commitment_t1 = 4;</code>
     * @return string
     */
    public function getPolyCommitmentT1()
    {
        return $this->poly_commitment_t1;
    }

    /**
     * 32 bytes, poly commitment (eq. 54)
     *
     * Generated from protobuf field <code>bytes poly_commitment_t1 = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setPolyCommitmentT1($var)
    {
        GPBUtil::checkString($var, False);
        $this->poly_commitment_t1 = $var;

        return $this;
    }

    /**
     * 32 bytes, poly commitment (eq. 54)
     *
     * Generated from protobuf field <code>bytes poly_commitment_t2 = 5;</code>
     * @return string
     */
    public function getPolyCommitmentT2()
    {
        return $this->poly_commitment_t2;
    }

    /**
     * 32 bytes, poly commitment (eq. 54)
     *
     * Generated from protobuf field <code>bytes poly_commitment_t2 = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setPolyCommitmentT2($var)
    {
        GPBUtil::checkString($var, False);
        $this->poly_commitment_t2 = $var;

        return $this;
    }

    /**
     * 32 bytes, proof of share (eq. 63)
     *
     * Generated from protobuf field <code>bytes proof_of_share_tau = 6;</code>
     * @return string
     */
    public function getProofOfShareTau()
    {
        return $this->proof_of_share_tau;
    }

    /**
     * 32 bytes, proof of share (eq. 63)
     *
     * Generated from protobuf field <code>bytes proof_of_share_tau = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setProofOfShareTau($var)
    {
        GPBUtil::checkString($var, False);
        $this->proof_of_share_tau = $var;

        return $this;
    }

    /**
     * 32 bytes, proof of share (eq. 63)
     *
     * Generated from protobuf field <code>bytes proof_of_share_mu = 7;</code>
     * @return string
     */
    public function getProofOfShareMu()
    {
        return $this->proof_of_share_mu;
    }

    /**
     * 32 bytes, proof of share (eq. 63)
     *
     * Generated from protobuf field <code>bytes proof_of_share_mu = 7;</code>
     * @param string $var
     * @return $this
     */
    public function setProofOfShareMu($var)
    {
        GPBUtil::checkString($var, False);
        $this->proof_of_share_mu = $var;

        return $this;
    }

    /**
     * k * 32 bytes, aggregated vector polynomial (eq. 63)
     *
     * Generated from protobuf field <code>repeated bytes aggregated_vector_polynomial_l = 8;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAggregatedVectorPolynomialL()
    {
        return $this->aggregated_vector_polynomial_l;
    }

    /**
     * k * 32 bytes, aggregated vector polynomial (eq. 63)
     *
     * Generated from protobuf field <code>repeated bytes aggregated_vector_polynomial_l = 8;</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAggregatedVectorPolynomialL($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::BYTES);
        $this->aggregated_vector_polynomial_l = $arr;

        return $this;
    }

    /**
     * k * 32 bytes, aggregated vector polynomial (eq. 63)
     *
     * Generated from protobuf field <code>repeated bytes aggregated_vector_polynomial_r = 9;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAggregatedVectorPolynomialR()
    {
        return $this->aggregated_vector_polynomial_r;
    }

    /**
     * k * 32 bytes, aggregated vector polynomial (eq. 63)
     *
     * Generated from protobuf field <code>repeated bytes aggregated_vector_polynomial_r = 9;</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAggregatedVectorPolynomialR($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::BYTES);
        $this->aggregated_vector_polynomial_r = $arr;

        return $this;
    }

    /**
     * 32 bytes (eq. 63)
     *
     * Generated from protobuf field <code>bytes a_prime_0 = 10;</code>
     * @return string
     */
    public function getAPrime0()
    {
        return $this->a_prime_0;
    }

    /**
     * 32 bytes (eq. 63)
     *
     * Generated from protobuf field <code>bytes a_prime_0 = 10;</code>
     * @param string $var
     * @return $this
     */
    public function setAPrime0($var)
    {
        GPBUtil::checkString($var, False);
        $this->a_prime_0 = $var;

        return $this;
    }

    /**
     * 32 bytes (eq. 63)
     *
     * Generated from protobuf field <code>bytes b_prime_0 = 11;</code>
     * @return string
     */
    public function getBPrime0()
    {
        return $this->b_prime_0;
    }

    /**
     * 32 bytes (eq. 63)
     *
     * Generated from protobuf field <code>bytes b_prime_0 = 11;</code>
     * @param string $var
     * @return $this
     */
    public function setBPrime0($var)
    {
        GPBUtil::checkString($var, False);
        $this->b_prime_0 = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes t = 12;</code>
     * @return string
     */
    public function getT()
    {
        return $this->t;
    }

    /**
     * Generated from protobuf field <code>bytes t = 12;</code>
     * @param string $var
     * @return $this
     */
    public function setT($var)
    {
        GPBUtil::checkString($var, False);
        $this->t = $var;

        return $this;
    }

}

