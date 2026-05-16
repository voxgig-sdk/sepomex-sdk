<?php
declare(strict_types=1);

// Sepomex SDK utility: result_body

class SepomexResultBody
{
    public static function call(SepomexContext $ctx): ?SepomexResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
