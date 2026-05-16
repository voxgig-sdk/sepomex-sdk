<?php
declare(strict_types=1);

// Sepomex SDK utility: result_headers

class SepomexResultHeaders
{
    public static function call(SepomexContext $ctx): ?SepomexResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
